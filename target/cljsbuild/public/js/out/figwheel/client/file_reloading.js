// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
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
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__56927 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__56927 == null)){
return null;
} else {
return goog.object.get(G__56927,"requires");
}
}):(function (path){
var G__56928 = goog.object.get(goog.dependencies_.requires,path);
if((G__56928 == null)){
return null;
} else {
return goog.object.getKeys(G__56928);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__56929_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__56929_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__56930 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__56930__$1 = (((G__56930 == null))?null:goog.object.get(G__56930,"provides"));
if((G__56930__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__56930__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__56931 = cljs.core.seq.call(null,provides);
var chunk__56932 = null;
var count__56933 = (0);
var i__56934 = (0);
while(true){
if((i__56934 < count__56933)){
var prov = cljs.core._nth.call(null,chunk__56932,i__56934);
var seq__56943_56955 = cljs.core.seq.call(null,requires);
var chunk__56944_56956 = null;
var count__56945_56957 = (0);
var i__56946_56958 = (0);
while(true){
if((i__56946_56958 < count__56945_56957)){
var req_56959 = cljs.core._nth.call(null,chunk__56944_56956,i__56946_56958);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_56959,prov);


var G__56960 = seq__56943_56955;
var G__56961 = chunk__56944_56956;
var G__56962 = count__56945_56957;
var G__56963 = (i__56946_56958 + (1));
seq__56943_56955 = G__56960;
chunk__56944_56956 = G__56961;
count__56945_56957 = G__56962;
i__56946_56958 = G__56963;
continue;
} else {
var temp__5735__auto___56964 = cljs.core.seq.call(null,seq__56943_56955);
if(temp__5735__auto___56964){
var seq__56943_56965__$1 = temp__5735__auto___56964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56943_56965__$1)){
var c__4556__auto___56966 = cljs.core.chunk_first.call(null,seq__56943_56965__$1);
var G__56967 = cljs.core.chunk_rest.call(null,seq__56943_56965__$1);
var G__56968 = c__4556__auto___56966;
var G__56969 = cljs.core.count.call(null,c__4556__auto___56966);
var G__56970 = (0);
seq__56943_56955 = G__56967;
chunk__56944_56956 = G__56968;
count__56945_56957 = G__56969;
i__56946_56958 = G__56970;
continue;
} else {
var req_56971 = cljs.core.first.call(null,seq__56943_56965__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_56971,prov);


var G__56972 = cljs.core.next.call(null,seq__56943_56965__$1);
var G__56973 = null;
var G__56974 = (0);
var G__56975 = (0);
seq__56943_56955 = G__56972;
chunk__56944_56956 = G__56973;
count__56945_56957 = G__56974;
i__56946_56958 = G__56975;
continue;
}
} else {
}
}
break;
}


var G__56976 = seq__56931;
var G__56977 = chunk__56932;
var G__56978 = count__56933;
var G__56979 = (i__56934 + (1));
seq__56931 = G__56976;
chunk__56932 = G__56977;
count__56933 = G__56978;
i__56934 = G__56979;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__56931);
if(temp__5735__auto__){
var seq__56931__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56931__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__56931__$1);
var G__56980 = cljs.core.chunk_rest.call(null,seq__56931__$1);
var G__56981 = c__4556__auto__;
var G__56982 = cljs.core.count.call(null,c__4556__auto__);
var G__56983 = (0);
seq__56931 = G__56980;
chunk__56932 = G__56981;
count__56933 = G__56982;
i__56934 = G__56983;
continue;
} else {
var prov = cljs.core.first.call(null,seq__56931__$1);
var seq__56947_56984 = cljs.core.seq.call(null,requires);
var chunk__56948_56985 = null;
var count__56949_56986 = (0);
var i__56950_56987 = (0);
while(true){
if((i__56950_56987 < count__56949_56986)){
var req_56988 = cljs.core._nth.call(null,chunk__56948_56985,i__56950_56987);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_56988,prov);


var G__56989 = seq__56947_56984;
var G__56990 = chunk__56948_56985;
var G__56991 = count__56949_56986;
var G__56992 = (i__56950_56987 + (1));
seq__56947_56984 = G__56989;
chunk__56948_56985 = G__56990;
count__56949_56986 = G__56991;
i__56950_56987 = G__56992;
continue;
} else {
var temp__5735__auto___56993__$1 = cljs.core.seq.call(null,seq__56947_56984);
if(temp__5735__auto___56993__$1){
var seq__56947_56994__$1 = temp__5735__auto___56993__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56947_56994__$1)){
var c__4556__auto___56995 = cljs.core.chunk_first.call(null,seq__56947_56994__$1);
var G__56996 = cljs.core.chunk_rest.call(null,seq__56947_56994__$1);
var G__56997 = c__4556__auto___56995;
var G__56998 = cljs.core.count.call(null,c__4556__auto___56995);
var G__56999 = (0);
seq__56947_56984 = G__56996;
chunk__56948_56985 = G__56997;
count__56949_56986 = G__56998;
i__56950_56987 = G__56999;
continue;
} else {
var req_57000 = cljs.core.first.call(null,seq__56947_56994__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57000,prov);


var G__57001 = cljs.core.next.call(null,seq__56947_56994__$1);
var G__57002 = null;
var G__57003 = (0);
var G__57004 = (0);
seq__56947_56984 = G__57001;
chunk__56948_56985 = G__57002;
count__56949_56986 = G__57003;
i__56950_56987 = G__57004;
continue;
}
} else {
}
}
break;
}


var G__57005 = cljs.core.next.call(null,seq__56931__$1);
var G__57006 = null;
var G__57007 = (0);
var G__57008 = (0);
seq__56931 = G__57005;
chunk__56932 = G__57006;
count__56933 = G__57007;
i__56934 = G__57008;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__56951 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__56952 = null;
var count__56953 = (0);
var i__56954 = (0);
while(true){
if((i__56954 < count__56953)){
var prov = cljs.core._nth.call(null,chunk__56952,i__56954);
goog.object.forEach(deps,((function (seq__56951,chunk__56952,count__56953,i__56954,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__56951,chunk__56952,count__56953,i__56954,prov,requires))
);


var G__57009 = seq__56951;
var G__57010 = chunk__56952;
var G__57011 = count__56953;
var G__57012 = (i__56954 + (1));
seq__56951 = G__57009;
chunk__56952 = G__57010;
count__56953 = G__57011;
i__56954 = G__57012;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__56951);
if(temp__5735__auto__){
var seq__56951__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56951__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__56951__$1);
var G__57013 = cljs.core.chunk_rest.call(null,seq__56951__$1);
var G__57014 = c__4556__auto__;
var G__57015 = cljs.core.count.call(null,c__4556__auto__);
var G__57016 = (0);
seq__56951 = G__57013;
chunk__56952 = G__57014;
count__56953 = G__57015;
i__56954 = G__57016;
continue;
} else {
var prov = cljs.core.first.call(null,seq__56951__$1);
goog.object.forEach(deps,((function (seq__56951,chunk__56952,count__56953,i__56954,prov,seq__56951__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__56951,chunk__56952,count__56953,i__56954,prov,seq__56951__$1,temp__5735__auto__,requires))
);


var G__57017 = cljs.core.next.call(null,seq__56951__$1);
var G__57018 = null;
var G__57019 = (0);
var G__57020 = (0);
seq__56951 = G__57017;
chunk__56952 = G__57018;
count__56953 = G__57019;
i__56954 = G__57020;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__57021){
var vec__57022 = p__57021;
var _ = cljs.core.nth.call(null,vec__57022,(0),null);
var v = cljs.core.nth.call(null,vec__57022,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__57025){
var vec__57026 = p__57025;
var k = cljs.core.nth.call(null,vec__57026,(0),null);
var v = cljs.core.nth.call(null,vec__57026,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__57038_57046 = cljs.core.seq.call(null,deps);
var chunk__57039_57047 = null;
var count__57040_57048 = (0);
var i__57041_57049 = (0);
while(true){
if((i__57041_57049 < count__57040_57048)){
var dep_57050 = cljs.core._nth.call(null,chunk__57039_57047,i__57041_57049);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_57050;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_57050));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_57050,(depth + (1)),state);
} else {
}


var G__57051 = seq__57038_57046;
var G__57052 = chunk__57039_57047;
var G__57053 = count__57040_57048;
var G__57054 = (i__57041_57049 + (1));
seq__57038_57046 = G__57051;
chunk__57039_57047 = G__57052;
count__57040_57048 = G__57053;
i__57041_57049 = G__57054;
continue;
} else {
var temp__5735__auto___57055 = cljs.core.seq.call(null,seq__57038_57046);
if(temp__5735__auto___57055){
var seq__57038_57056__$1 = temp__5735__auto___57055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57038_57056__$1)){
var c__4556__auto___57057 = cljs.core.chunk_first.call(null,seq__57038_57056__$1);
var G__57058 = cljs.core.chunk_rest.call(null,seq__57038_57056__$1);
var G__57059 = c__4556__auto___57057;
var G__57060 = cljs.core.count.call(null,c__4556__auto___57057);
var G__57061 = (0);
seq__57038_57046 = G__57058;
chunk__57039_57047 = G__57059;
count__57040_57048 = G__57060;
i__57041_57049 = G__57061;
continue;
} else {
var dep_57062 = cljs.core.first.call(null,seq__57038_57056__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_57062;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_57062));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_57062,(depth + (1)),state);
} else {
}


var G__57063 = cljs.core.next.call(null,seq__57038_57056__$1);
var G__57064 = null;
var G__57065 = (0);
var G__57066 = (0);
seq__57038_57046 = G__57063;
chunk__57039_57047 = G__57064;
count__57040_57048 = G__57065;
i__57041_57049 = G__57066;
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
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__57042){
var vec__57043 = p__57042;
var seq__57044 = cljs.core.seq.call(null,vec__57043);
var first__57045 = cljs.core.first.call(null,seq__57044);
var seq__57044__$1 = cljs.core.next.call(null,seq__57044);
var x = first__57045;
var xs = seq__57044__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__57029_SHARP_){
return clojure.set.difference.call(null,p1__57029_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__57067_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__57067_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__57068 = cljs.core.seq.call(null,provides);
var chunk__57069 = null;
var count__57070 = (0);
var i__57071 = (0);
while(true){
if((i__57071 < count__57070)){
var prov = cljs.core._nth.call(null,chunk__57069,i__57071);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__57080_57088 = cljs.core.seq.call(null,requires);
var chunk__57081_57089 = null;
var count__57082_57090 = (0);
var i__57083_57091 = (0);
while(true){
if((i__57083_57091 < count__57082_57090)){
var req_57092 = cljs.core._nth.call(null,chunk__57081_57089,i__57083_57091);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57092,prov);


var G__57093 = seq__57080_57088;
var G__57094 = chunk__57081_57089;
var G__57095 = count__57082_57090;
var G__57096 = (i__57083_57091 + (1));
seq__57080_57088 = G__57093;
chunk__57081_57089 = G__57094;
count__57082_57090 = G__57095;
i__57083_57091 = G__57096;
continue;
} else {
var temp__5735__auto___57097 = cljs.core.seq.call(null,seq__57080_57088);
if(temp__5735__auto___57097){
var seq__57080_57098__$1 = temp__5735__auto___57097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57080_57098__$1)){
var c__4556__auto___57099 = cljs.core.chunk_first.call(null,seq__57080_57098__$1);
var G__57100 = cljs.core.chunk_rest.call(null,seq__57080_57098__$1);
var G__57101 = c__4556__auto___57099;
var G__57102 = cljs.core.count.call(null,c__4556__auto___57099);
var G__57103 = (0);
seq__57080_57088 = G__57100;
chunk__57081_57089 = G__57101;
count__57082_57090 = G__57102;
i__57083_57091 = G__57103;
continue;
} else {
var req_57104 = cljs.core.first.call(null,seq__57080_57098__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57104,prov);


var G__57105 = cljs.core.next.call(null,seq__57080_57098__$1);
var G__57106 = null;
var G__57107 = (0);
var G__57108 = (0);
seq__57080_57088 = G__57105;
chunk__57081_57089 = G__57106;
count__57082_57090 = G__57107;
i__57083_57091 = G__57108;
continue;
}
} else {
}
}
break;
}


var G__57109 = seq__57068;
var G__57110 = chunk__57069;
var G__57111 = count__57070;
var G__57112 = (i__57071 + (1));
seq__57068 = G__57109;
chunk__57069 = G__57110;
count__57070 = G__57111;
i__57071 = G__57112;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__57068);
if(temp__5735__auto__){
var seq__57068__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57068__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__57068__$1);
var G__57113 = cljs.core.chunk_rest.call(null,seq__57068__$1);
var G__57114 = c__4556__auto__;
var G__57115 = cljs.core.count.call(null,c__4556__auto__);
var G__57116 = (0);
seq__57068 = G__57113;
chunk__57069 = G__57114;
count__57070 = G__57115;
i__57071 = G__57116;
continue;
} else {
var prov = cljs.core.first.call(null,seq__57068__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__57084_57117 = cljs.core.seq.call(null,requires);
var chunk__57085_57118 = null;
var count__57086_57119 = (0);
var i__57087_57120 = (0);
while(true){
if((i__57087_57120 < count__57086_57119)){
var req_57121 = cljs.core._nth.call(null,chunk__57085_57118,i__57087_57120);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57121,prov);


var G__57122 = seq__57084_57117;
var G__57123 = chunk__57085_57118;
var G__57124 = count__57086_57119;
var G__57125 = (i__57087_57120 + (1));
seq__57084_57117 = G__57122;
chunk__57085_57118 = G__57123;
count__57086_57119 = G__57124;
i__57087_57120 = G__57125;
continue;
} else {
var temp__5735__auto___57126__$1 = cljs.core.seq.call(null,seq__57084_57117);
if(temp__5735__auto___57126__$1){
var seq__57084_57127__$1 = temp__5735__auto___57126__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57084_57127__$1)){
var c__4556__auto___57128 = cljs.core.chunk_first.call(null,seq__57084_57127__$1);
var G__57129 = cljs.core.chunk_rest.call(null,seq__57084_57127__$1);
var G__57130 = c__4556__auto___57128;
var G__57131 = cljs.core.count.call(null,c__4556__auto___57128);
var G__57132 = (0);
seq__57084_57117 = G__57129;
chunk__57085_57118 = G__57130;
count__57086_57119 = G__57131;
i__57087_57120 = G__57132;
continue;
} else {
var req_57133 = cljs.core.first.call(null,seq__57084_57127__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_57133,prov);


var G__57134 = cljs.core.next.call(null,seq__57084_57127__$1);
var G__57135 = null;
var G__57136 = (0);
var G__57137 = (0);
seq__57084_57117 = G__57134;
chunk__57085_57118 = G__57135;
count__57086_57119 = G__57136;
i__57087_57120 = G__57137;
continue;
}
} else {
}
}
break;
}


var G__57138 = cljs.core.next.call(null,seq__57068__$1);
var G__57139 = null;
var G__57140 = (0);
var G__57141 = (0);
seq__57068 = G__57138;
chunk__57069 = G__57139;
count__57070 = G__57140;
i__57071 = G__57141;
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
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__57142_57146 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__57143_57147 = null;
var count__57144_57148 = (0);
var i__57145_57149 = (0);
while(true){
if((i__57145_57149 < count__57144_57148)){
var ns_57150 = cljs.core._nth.call(null,chunk__57143_57147,i__57145_57149);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_57150);


var G__57151 = seq__57142_57146;
var G__57152 = chunk__57143_57147;
var G__57153 = count__57144_57148;
var G__57154 = (i__57145_57149 + (1));
seq__57142_57146 = G__57151;
chunk__57143_57147 = G__57152;
count__57144_57148 = G__57153;
i__57145_57149 = G__57154;
continue;
} else {
var temp__5735__auto___57155 = cljs.core.seq.call(null,seq__57142_57146);
if(temp__5735__auto___57155){
var seq__57142_57156__$1 = temp__5735__auto___57155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57142_57156__$1)){
var c__4556__auto___57157 = cljs.core.chunk_first.call(null,seq__57142_57156__$1);
var G__57158 = cljs.core.chunk_rest.call(null,seq__57142_57156__$1);
var G__57159 = c__4556__auto___57157;
var G__57160 = cljs.core.count.call(null,c__4556__auto___57157);
var G__57161 = (0);
seq__57142_57146 = G__57158;
chunk__57143_57147 = G__57159;
count__57144_57148 = G__57160;
i__57145_57149 = G__57161;
continue;
} else {
var ns_57162 = cljs.core.first.call(null,seq__57142_57156__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_57162);


var G__57163 = cljs.core.next.call(null,seq__57142_57156__$1);
var G__57164 = null;
var G__57165 = (0);
var G__57166 = (0);
seq__57142_57146 = G__57163;
chunk__57143_57147 = G__57164;
count__57144_57148 = G__57165;
i__57145_57149 = G__57166;
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
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__57167__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__57167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57168__i = 0, G__57168__a = new Array(arguments.length -  0);
while (G__57168__i < G__57168__a.length) {G__57168__a[G__57168__i] = arguments[G__57168__i + 0]; ++G__57168__i;}
  args = new cljs.core.IndexedSeq(G__57168__a,0,null);
} 
return G__57167__delegate.call(this,args);};
G__57167.cljs$lang$maxFixedArity = 0;
G__57167.cljs$lang$applyTo = (function (arglist__57169){
var args = cljs.core.seq(arglist__57169);
return G__57167__delegate(args);
});
G__57167.cljs$core$IFn$_invoke$arity$variadic = G__57167__delegate;
return G__57167;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__57170_SHARP_,p2__57171_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__57170_SHARP_)),p2__57171_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__57172_SHARP_,p2__57173_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__57172_SHARP_),p2__57173_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__57174 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__57174.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__57174.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__57174;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e57175){if((e57175 instanceof Error)){
var e = e57175;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e57175;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e57176){if((e57176 instanceof Error)){
var e = e57176;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e57176;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__57177 = cljs.core._EQ_;
var expr__57178 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__57177.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__57178))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__57177.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__57178))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__57177.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__57178))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__57180,callback){
var map__57181 = p__57180;
var map__57181__$1 = (((((!((map__57181 == null))))?(((((map__57181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57181):map__57181);
var file_msg = map__57181__$1;
var request_url = cljs.core.get.call(null,map__57181__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__49726__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_57219){
var state_val_57220 = (state_57219[(1)]);
if((state_val_57220 === (7))){
var inst_57215 = (state_57219[(2)]);
var state_57219__$1 = state_57219;
var statearr_57221_57247 = state_57219__$1;
(statearr_57221_57247[(2)] = inst_57215);

(statearr_57221_57247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57220 === (1))){
var state_57219__$1 = state_57219;
var statearr_57222_57248 = state_57219__$1;
(statearr_57222_57248[(2)] = null);

(statearr_57222_57248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57220 === (4))){
var inst_57185 = (state_57219[(7)]);
var inst_57185__$1 = (state_57219[(2)]);
var state_57219__$1 = (function (){var statearr_57223 = state_57219;
(statearr_57223[(7)] = inst_57185__$1);

return statearr_57223;
})();
if(cljs.core.truth_(inst_57185__$1)){
var statearr_57224_57249 = state_57219__$1;
(statearr_57224_57249[(1)] = (5));

} else {
var statearr_57225_57250 = state_57219__$1;
(statearr_57225_57250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57220 === (15))){
var inst_57200 = (state_57219[(8)]);
var inst_57198 = (state_57219[(9)]);
var inst_57202 = inst_57200.call(null,inst_57198);
var state_57219__$1 = state_57219;
var statearr_57226_57251 = state_57219__$1;
(statearr_57226_57251[(2)] = inst_57202);

(statearr_57226_57251[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57220 === (13))){
var inst_57209 = (state_57219[(2)]);
var state_57219__$1 = state_57219;
var statearr_57227_57252 = state_57219__$1;
(statearr_57227_57252[(2)] = inst_57209);

(statearr_57227_57252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57220 === (6))){
var state_57219__$1 = state_57219;
var statearr_57228_57253 = state_57219__$1;
(statearr_57228_57253[(2)] = null);

(statearr_57228_57253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57220 === (17))){
var inst_57206 = (state_57219[(2)]);
var state_57219__$1 = state_57219;
var statearr_57229_57254 = state_57219__$1;
(statearr_57229_57254[(2)] = inst_57206);

(statearr_57229_57254[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57220 === (3))){
var inst_57217 = (state_57219[(2)]);
var state_57219__$1 = state_57219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57219__$1,inst_57217);
} else {
if((state_val_57220 === (12))){
var state_57219__$1 = state_57219;
var statearr_57230_57255 = state_57219__$1;
(statearr_57230_57255[(2)] = null);

(statearr_57230_57255[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57220 === (2))){
var state_57219__$1 = state_57219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57219__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_57220 === (11))){
var inst_57190 = (state_57219[(10)]);
var inst_57196 = figwheel.client.file_reloading.blocking_load.call(null,inst_57190);
var state_57219__$1 = state_57219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57219__$1,(14),inst_57196);
} else {
if((state_val_57220 === (9))){
var inst_57190 = (state_57219[(10)]);
var state_57219__$1 = state_57219;
if(cljs.core.truth_(inst_57190)){
var statearr_57231_57256 = state_57219__$1;
(statearr_57231_57256[(1)] = (11));

} else {
var statearr_57232_57257 = state_57219__$1;
(statearr_57232_57257[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57220 === (5))){
var inst_57191 = (state_57219[(11)]);
var inst_57185 = (state_57219[(7)]);
var inst_57190 = cljs.core.nth.call(null,inst_57185,(0),null);
var inst_57191__$1 = cljs.core.nth.call(null,inst_57185,(1),null);
var state_57219__$1 = (function (){var statearr_57233 = state_57219;
(statearr_57233[(11)] = inst_57191__$1);

(statearr_57233[(10)] = inst_57190);

return statearr_57233;
})();
if(cljs.core.truth_(inst_57191__$1)){
var statearr_57234_57258 = state_57219__$1;
(statearr_57234_57258[(1)] = (8));

} else {
var statearr_57235_57259 = state_57219__$1;
(statearr_57235_57259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57220 === (14))){
var inst_57200 = (state_57219[(8)]);
var inst_57190 = (state_57219[(10)]);
var inst_57198 = (state_57219[(2)]);
var inst_57199 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_57200__$1 = cljs.core.get.call(null,inst_57199,inst_57190);
var state_57219__$1 = (function (){var statearr_57236 = state_57219;
(statearr_57236[(8)] = inst_57200__$1);

(statearr_57236[(9)] = inst_57198);

return statearr_57236;
})();
if(cljs.core.truth_(inst_57200__$1)){
var statearr_57237_57260 = state_57219__$1;
(statearr_57237_57260[(1)] = (15));

} else {
var statearr_57238_57261 = state_57219__$1;
(statearr_57238_57261[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57220 === (16))){
var inst_57198 = (state_57219[(9)]);
var inst_57204 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_57198);
var state_57219__$1 = state_57219;
var statearr_57239_57262 = state_57219__$1;
(statearr_57239_57262[(2)] = inst_57204);

(statearr_57239_57262[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57220 === (10))){
var inst_57211 = (state_57219[(2)]);
var state_57219__$1 = (function (){var statearr_57240 = state_57219;
(statearr_57240[(12)] = inst_57211);

return statearr_57240;
})();
var statearr_57241_57263 = state_57219__$1;
(statearr_57241_57263[(2)] = null);

(statearr_57241_57263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57220 === (8))){
var inst_57191 = (state_57219[(11)]);
var inst_57193 = eval(inst_57191);
var state_57219__$1 = state_57219;
var statearr_57242_57264 = state_57219__$1;
(statearr_57242_57264[(2)] = inst_57193);

(statearr_57242_57264[(1)] = (10));


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
});
return (function() {
var figwheel$client$file_reloading$state_machine__49559__auto__ = null;
var figwheel$client$file_reloading$state_machine__49559__auto____0 = (function (){
var statearr_57243 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57243[(0)] = figwheel$client$file_reloading$state_machine__49559__auto__);

(statearr_57243[(1)] = (1));

return statearr_57243;
});
var figwheel$client$file_reloading$state_machine__49559__auto____1 = (function (state_57219){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_57219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e57244){if((e57244 instanceof Object)){
var ex__49562__auto__ = e57244;
var statearr_57245_57265 = state_57219;
(statearr_57245_57265[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57266 = state_57219;
state_57219 = G__57266;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__49559__auto__ = function(state_57219){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__49559__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__49559__auto____1.call(this,state_57219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__49559__auto____0;
figwheel$client$file_reloading$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__49559__auto____1;
return figwheel$client$file_reloading$state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_57246 = f__49727__auto__.call(null);
(statearr_57246[(6)] = c__49726__auto__);

return statearr_57246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));

return c__49726__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__57268 = arguments.length;
switch (G__57268) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__57270,callback){
var map__57271 = p__57270;
var map__57271__$1 = (((((!((map__57271 == null))))?(((((map__57271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57271):map__57271);
var file_msg = map__57271__$1;
var namespace = cljs.core.get.call(null,map__57271__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__57273){
var map__57274 = p__57273;
var map__57274__$1 = (((((!((map__57274 == null))))?(((((map__57274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57274):map__57274);
var file_msg = map__57274__$1;
var namespace = cljs.core.get.call(null,map__57274__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__57276){
var map__57277 = p__57276;
var map__57277__$1 = (((((!((map__57277 == null))))?(((((map__57277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57277):map__57277);
var file_msg = map__57277__$1;
var namespace = cljs.core.get.call(null,map__57277__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__57279,callback){
var map__57280 = p__57279;
var map__57280__$1 = (((((!((map__57280 == null))))?(((((map__57280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57280):map__57280);
var file_msg = map__57280__$1;
var request_url = cljs.core.get.call(null,map__57280__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__57280__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__49726__auto___57330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_57315){
var state_val_57316 = (state_57315[(1)]);
if((state_val_57316 === (1))){
var inst_57289 = cljs.core.seq.call(null,files);
var inst_57290 = cljs.core.first.call(null,inst_57289);
var inst_57291 = cljs.core.next.call(null,inst_57289);
var inst_57292 = files;
var state_57315__$1 = (function (){var statearr_57317 = state_57315;
(statearr_57317[(7)] = inst_57292);

(statearr_57317[(8)] = inst_57291);

(statearr_57317[(9)] = inst_57290);

return statearr_57317;
})();
var statearr_57318_57331 = state_57315__$1;
(statearr_57318_57331[(2)] = null);

(statearr_57318_57331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57316 === (2))){
var inst_57292 = (state_57315[(7)]);
var inst_57298 = (state_57315[(10)]);
var inst_57297 = cljs.core.seq.call(null,inst_57292);
var inst_57298__$1 = cljs.core.first.call(null,inst_57297);
var inst_57299 = cljs.core.next.call(null,inst_57297);
var inst_57300 = (inst_57298__$1 == null);
var inst_57301 = cljs.core.not.call(null,inst_57300);
var state_57315__$1 = (function (){var statearr_57319 = state_57315;
(statearr_57319[(11)] = inst_57299);

(statearr_57319[(10)] = inst_57298__$1);

return statearr_57319;
})();
if(inst_57301){
var statearr_57320_57332 = state_57315__$1;
(statearr_57320_57332[(1)] = (4));

} else {
var statearr_57321_57333 = state_57315__$1;
(statearr_57321_57333[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57316 === (3))){
var inst_57313 = (state_57315[(2)]);
var state_57315__$1 = state_57315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57315__$1,inst_57313);
} else {
if((state_val_57316 === (4))){
var inst_57298 = (state_57315[(10)]);
var inst_57303 = figwheel.client.file_reloading.reload_js_file.call(null,inst_57298);
var state_57315__$1 = state_57315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57315__$1,(7),inst_57303);
} else {
if((state_val_57316 === (5))){
var inst_57309 = cljs.core.async.close_BANG_.call(null,out);
var state_57315__$1 = state_57315;
var statearr_57322_57334 = state_57315__$1;
(statearr_57322_57334[(2)] = inst_57309);

(statearr_57322_57334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57316 === (6))){
var inst_57311 = (state_57315[(2)]);
var state_57315__$1 = state_57315;
var statearr_57323_57335 = state_57315__$1;
(statearr_57323_57335[(2)] = inst_57311);

(statearr_57323_57335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57316 === (7))){
var inst_57299 = (state_57315[(11)]);
var inst_57305 = (state_57315[(2)]);
var inst_57306 = cljs.core.async.put_BANG_.call(null,out,inst_57305);
var inst_57292 = inst_57299;
var state_57315__$1 = (function (){var statearr_57324 = state_57315;
(statearr_57324[(7)] = inst_57292);

(statearr_57324[(12)] = inst_57306);

return statearr_57324;
})();
var statearr_57325_57336 = state_57315__$1;
(statearr_57325_57336[(2)] = null);

(statearr_57325_57336[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__49559__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__49559__auto____0 = (function (){
var statearr_57326 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57326[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__49559__auto__);

(statearr_57326[(1)] = (1));

return statearr_57326;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__49559__auto____1 = (function (state_57315){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_57315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e57327){if((e57327 instanceof Object)){
var ex__49562__auto__ = e57327;
var statearr_57328_57337 = state_57315;
(statearr_57328_57337[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57338 = state_57315;
state_57315 = G__57338;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__49559__auto__ = function(state_57315){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__49559__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__49559__auto____1.call(this,state_57315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__49559__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__49559__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_57329 = f__49727__auto__.call(null);
(statearr_57329[(6)] = c__49726__auto___57330);

return statearr_57329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__57339,opts){
var map__57340 = p__57339;
var map__57340__$1 = (((((!((map__57340 == null))))?(((((map__57340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57340):map__57340);
var eval_body = cljs.core.get.call(null,map__57340__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__57340__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e57342){var e = e57342;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__57343_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__57343_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
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
return cljs.core.map.call(null,(function (p__57344){
var vec__57345 = p__57344;
var k = cljs.core.nth.call(null,vec__57345,(0),null);
var v = cljs.core.nth.call(null,vec__57345,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__57348){
var vec__57349 = p__57348;
var k = cljs.core.nth.call(null,vec__57349,(0),null);
var v = cljs.core.nth.call(null,vec__57349,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__57355,p__57356){
var map__57357 = p__57355;
var map__57357__$1 = (((((!((map__57357 == null))))?(((((map__57357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57357):map__57357);
var opts = map__57357__$1;
var before_jsload = cljs.core.get.call(null,map__57357__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__57357__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__57357__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__57358 = p__57356;
var map__57358__$1 = (((((!((map__57358 == null))))?(((((map__57358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57358):map__57358);
var msg = map__57358__$1;
var files = cljs.core.get.call(null,map__57358__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__57358__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__57358__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__49726__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_57512){
var state_val_57513 = (state_57512[(1)]);
if((state_val_57513 === (7))){
var inst_57375 = (state_57512[(7)]);
var inst_57372 = (state_57512[(8)]);
var inst_57373 = (state_57512[(9)]);
var inst_57374 = (state_57512[(10)]);
var inst_57380 = cljs.core._nth.call(null,inst_57373,inst_57375);
var inst_57381 = figwheel.client.file_reloading.eval_body.call(null,inst_57380,opts);
var inst_57382 = (inst_57375 + (1));
var tmp57514 = inst_57372;
var tmp57515 = inst_57373;
var tmp57516 = inst_57374;
var inst_57372__$1 = tmp57514;
var inst_57373__$1 = tmp57515;
var inst_57374__$1 = tmp57516;
var inst_57375__$1 = inst_57382;
var state_57512__$1 = (function (){var statearr_57517 = state_57512;
(statearr_57517[(7)] = inst_57375__$1);

(statearr_57517[(11)] = inst_57381);

(statearr_57517[(8)] = inst_57372__$1);

(statearr_57517[(9)] = inst_57373__$1);

(statearr_57517[(10)] = inst_57374__$1);

return statearr_57517;
})();
var statearr_57518_57601 = state_57512__$1;
(statearr_57518_57601[(2)] = null);

(statearr_57518_57601[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (20))){
var inst_57415 = (state_57512[(12)]);
var inst_57423 = figwheel.client.file_reloading.sort_files.call(null,inst_57415);
var state_57512__$1 = state_57512;
var statearr_57519_57602 = state_57512__$1;
(statearr_57519_57602[(2)] = inst_57423);

(statearr_57519_57602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (27))){
var state_57512__$1 = state_57512;
var statearr_57520_57603 = state_57512__$1;
(statearr_57520_57603[(2)] = null);

(statearr_57520_57603[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (1))){
var inst_57364 = (state_57512[(13)]);
var inst_57361 = before_jsload.call(null,files);
var inst_57362 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_57363 = (function (){return (function (p1__57352_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__57352_SHARP_);
});
})();
var inst_57364__$1 = cljs.core.filter.call(null,inst_57363,files);
var inst_57365 = cljs.core.not_empty.call(null,inst_57364__$1);
var state_57512__$1 = (function (){var statearr_57521 = state_57512;
(statearr_57521[(14)] = inst_57361);

(statearr_57521[(15)] = inst_57362);

(statearr_57521[(13)] = inst_57364__$1);

return statearr_57521;
})();
if(cljs.core.truth_(inst_57365)){
var statearr_57522_57604 = state_57512__$1;
(statearr_57522_57604[(1)] = (2));

} else {
var statearr_57523_57605 = state_57512__$1;
(statearr_57523_57605[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (24))){
var state_57512__$1 = state_57512;
var statearr_57524_57606 = state_57512__$1;
(statearr_57524_57606[(2)] = null);

(statearr_57524_57606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (39))){
var inst_57465 = (state_57512[(16)]);
var state_57512__$1 = state_57512;
var statearr_57525_57607 = state_57512__$1;
(statearr_57525_57607[(2)] = inst_57465);

(statearr_57525_57607[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (46))){
var inst_57507 = (state_57512[(2)]);
var state_57512__$1 = state_57512;
var statearr_57526_57608 = state_57512__$1;
(statearr_57526_57608[(2)] = inst_57507);

(statearr_57526_57608[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (4))){
var inst_57409 = (state_57512[(2)]);
var inst_57410 = cljs.core.List.EMPTY;
var inst_57411 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_57410);
var inst_57412 = (function (){return (function (p1__57353_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__57353_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__57353_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__57353_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_57413 = cljs.core.filter.call(null,inst_57412,files);
var inst_57414 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_57415 = cljs.core.concat.call(null,inst_57413,inst_57414);
var state_57512__$1 = (function (){var statearr_57527 = state_57512;
(statearr_57527[(17)] = inst_57409);

(statearr_57527[(18)] = inst_57411);

(statearr_57527[(12)] = inst_57415);

return statearr_57527;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_57528_57609 = state_57512__$1;
(statearr_57528_57609[(1)] = (16));

} else {
var statearr_57529_57610 = state_57512__$1;
(statearr_57529_57610[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (15))){
var inst_57399 = (state_57512[(2)]);
var state_57512__$1 = state_57512;
var statearr_57530_57611 = state_57512__$1;
(statearr_57530_57611[(2)] = inst_57399);

(statearr_57530_57611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (21))){
var inst_57425 = (state_57512[(19)]);
var inst_57425__$1 = (state_57512[(2)]);
var inst_57426 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_57425__$1);
var state_57512__$1 = (function (){var statearr_57531 = state_57512;
(statearr_57531[(19)] = inst_57425__$1);

return statearr_57531;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57512__$1,(22),inst_57426);
} else {
if((state_val_57513 === (31))){
var inst_57510 = (state_57512[(2)]);
var state_57512__$1 = state_57512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57512__$1,inst_57510);
} else {
if((state_val_57513 === (32))){
var inst_57465 = (state_57512[(16)]);
var inst_57470 = inst_57465.cljs$lang$protocol_mask$partition0$;
var inst_57471 = (inst_57470 & (64));
var inst_57472 = inst_57465.cljs$core$ISeq$;
var inst_57473 = (cljs.core.PROTOCOL_SENTINEL === inst_57472);
var inst_57474 = ((inst_57471) || (inst_57473));
var state_57512__$1 = state_57512;
if(cljs.core.truth_(inst_57474)){
var statearr_57532_57612 = state_57512__$1;
(statearr_57532_57612[(1)] = (35));

} else {
var statearr_57533_57613 = state_57512__$1;
(statearr_57533_57613[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (40))){
var inst_57487 = (state_57512[(20)]);
var inst_57486 = (state_57512[(2)]);
var inst_57487__$1 = cljs.core.get.call(null,inst_57486,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_57488 = cljs.core.get.call(null,inst_57486,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_57489 = cljs.core.not_empty.call(null,inst_57487__$1);
var state_57512__$1 = (function (){var statearr_57534 = state_57512;
(statearr_57534[(21)] = inst_57488);

(statearr_57534[(20)] = inst_57487__$1);

return statearr_57534;
})();
if(cljs.core.truth_(inst_57489)){
var statearr_57535_57614 = state_57512__$1;
(statearr_57535_57614[(1)] = (41));

} else {
var statearr_57536_57615 = state_57512__$1;
(statearr_57536_57615[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (33))){
var state_57512__$1 = state_57512;
var statearr_57537_57616 = state_57512__$1;
(statearr_57537_57616[(2)] = false);

(statearr_57537_57616[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (13))){
var inst_57385 = (state_57512[(22)]);
var inst_57389 = cljs.core.chunk_first.call(null,inst_57385);
var inst_57390 = cljs.core.chunk_rest.call(null,inst_57385);
var inst_57391 = cljs.core.count.call(null,inst_57389);
var inst_57372 = inst_57390;
var inst_57373 = inst_57389;
var inst_57374 = inst_57391;
var inst_57375 = (0);
var state_57512__$1 = (function (){var statearr_57538 = state_57512;
(statearr_57538[(7)] = inst_57375);

(statearr_57538[(8)] = inst_57372);

(statearr_57538[(9)] = inst_57373);

(statearr_57538[(10)] = inst_57374);

return statearr_57538;
})();
var statearr_57539_57617 = state_57512__$1;
(statearr_57539_57617[(2)] = null);

(statearr_57539_57617[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (22))){
var inst_57428 = (state_57512[(23)]);
var inst_57433 = (state_57512[(24)]);
var inst_57425 = (state_57512[(19)]);
var inst_57429 = (state_57512[(25)]);
var inst_57428__$1 = (state_57512[(2)]);
var inst_57429__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_57428__$1);
var inst_57430 = (function (){var all_files = inst_57425;
var res_SINGLEQUOTE_ = inst_57428__$1;
var res = inst_57429__$1;
return (function (p1__57354_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__57354_SHARP_));
});
})();
var inst_57431 = cljs.core.filter.call(null,inst_57430,inst_57428__$1);
var inst_57432 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_57433__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_57432);
var inst_57434 = cljs.core.not_empty.call(null,inst_57433__$1);
var state_57512__$1 = (function (){var statearr_57540 = state_57512;
(statearr_57540[(26)] = inst_57431);

(statearr_57540[(23)] = inst_57428__$1);

(statearr_57540[(24)] = inst_57433__$1);

(statearr_57540[(25)] = inst_57429__$1);

return statearr_57540;
})();
if(cljs.core.truth_(inst_57434)){
var statearr_57541_57618 = state_57512__$1;
(statearr_57541_57618[(1)] = (23));

} else {
var statearr_57542_57619 = state_57512__$1;
(statearr_57542_57619[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (36))){
var state_57512__$1 = state_57512;
var statearr_57543_57620 = state_57512__$1;
(statearr_57543_57620[(2)] = false);

(statearr_57543_57620[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (41))){
var inst_57487 = (state_57512[(20)]);
var inst_57491 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_57492 = cljs.core.map.call(null,inst_57491,inst_57487);
var inst_57493 = cljs.core.pr_str.call(null,inst_57492);
var inst_57494 = ["figwheel-no-load meta-data: ",inst_57493].join('');
var inst_57495 = figwheel.client.utils.log.call(null,inst_57494);
var state_57512__$1 = state_57512;
var statearr_57544_57621 = state_57512__$1;
(statearr_57544_57621[(2)] = inst_57495);

(statearr_57544_57621[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (43))){
var inst_57488 = (state_57512[(21)]);
var inst_57498 = (state_57512[(2)]);
var inst_57499 = cljs.core.not_empty.call(null,inst_57488);
var state_57512__$1 = (function (){var statearr_57545 = state_57512;
(statearr_57545[(27)] = inst_57498);

return statearr_57545;
})();
if(cljs.core.truth_(inst_57499)){
var statearr_57546_57622 = state_57512__$1;
(statearr_57546_57622[(1)] = (44));

} else {
var statearr_57547_57623 = state_57512__$1;
(statearr_57547_57623[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (29))){
var inst_57431 = (state_57512[(26)]);
var inst_57428 = (state_57512[(23)]);
var inst_57433 = (state_57512[(24)]);
var inst_57425 = (state_57512[(19)]);
var inst_57429 = (state_57512[(25)]);
var inst_57465 = (state_57512[(16)]);
var inst_57461 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_57464 = (function (){var all_files = inst_57425;
var res_SINGLEQUOTE_ = inst_57428;
var res = inst_57429;
var files_not_loaded = inst_57431;
var dependencies_that_loaded = inst_57433;
return (function (p__57463){
var map__57548 = p__57463;
var map__57548__$1 = (((((!((map__57548 == null))))?(((((map__57548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57548):map__57548);
var namespace = cljs.core.get.call(null,map__57548__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
})();
var inst_57465__$1 = cljs.core.group_by.call(null,inst_57464,inst_57431);
var inst_57467 = (inst_57465__$1 == null);
var inst_57468 = cljs.core.not.call(null,inst_57467);
var state_57512__$1 = (function (){var statearr_57550 = state_57512;
(statearr_57550[(28)] = inst_57461);

(statearr_57550[(16)] = inst_57465__$1);

return statearr_57550;
})();
if(inst_57468){
var statearr_57551_57624 = state_57512__$1;
(statearr_57551_57624[(1)] = (32));

} else {
var statearr_57552_57625 = state_57512__$1;
(statearr_57552_57625[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (44))){
var inst_57488 = (state_57512[(21)]);
var inst_57501 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_57488);
var inst_57502 = cljs.core.pr_str.call(null,inst_57501);
var inst_57503 = ["not required: ",inst_57502].join('');
var inst_57504 = figwheel.client.utils.log.call(null,inst_57503);
var state_57512__$1 = state_57512;
var statearr_57553_57626 = state_57512__$1;
(statearr_57553_57626[(2)] = inst_57504);

(statearr_57553_57626[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (6))){
var inst_57406 = (state_57512[(2)]);
var state_57512__$1 = state_57512;
var statearr_57554_57627 = state_57512__$1;
(statearr_57554_57627[(2)] = inst_57406);

(statearr_57554_57627[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (28))){
var inst_57431 = (state_57512[(26)]);
var inst_57458 = (state_57512[(2)]);
var inst_57459 = cljs.core.not_empty.call(null,inst_57431);
var state_57512__$1 = (function (){var statearr_57555 = state_57512;
(statearr_57555[(29)] = inst_57458);

return statearr_57555;
})();
if(cljs.core.truth_(inst_57459)){
var statearr_57556_57628 = state_57512__$1;
(statearr_57556_57628[(1)] = (29));

} else {
var statearr_57557_57629 = state_57512__$1;
(statearr_57557_57629[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (25))){
var inst_57429 = (state_57512[(25)]);
var inst_57445 = (state_57512[(2)]);
var inst_57446 = cljs.core.not_empty.call(null,inst_57429);
var state_57512__$1 = (function (){var statearr_57558 = state_57512;
(statearr_57558[(30)] = inst_57445);

return statearr_57558;
})();
if(cljs.core.truth_(inst_57446)){
var statearr_57559_57630 = state_57512__$1;
(statearr_57559_57630[(1)] = (26));

} else {
var statearr_57560_57631 = state_57512__$1;
(statearr_57560_57631[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (34))){
var inst_57481 = (state_57512[(2)]);
var state_57512__$1 = state_57512;
if(cljs.core.truth_(inst_57481)){
var statearr_57561_57632 = state_57512__$1;
(statearr_57561_57632[(1)] = (38));

} else {
var statearr_57562_57633 = state_57512__$1;
(statearr_57562_57633[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (17))){
var state_57512__$1 = state_57512;
var statearr_57563_57634 = state_57512__$1;
(statearr_57563_57634[(2)] = recompile_dependents);

(statearr_57563_57634[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (3))){
var state_57512__$1 = state_57512;
var statearr_57564_57635 = state_57512__$1;
(statearr_57564_57635[(2)] = null);

(statearr_57564_57635[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (12))){
var inst_57402 = (state_57512[(2)]);
var state_57512__$1 = state_57512;
var statearr_57565_57636 = state_57512__$1;
(statearr_57565_57636[(2)] = inst_57402);

(statearr_57565_57636[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (2))){
var inst_57364 = (state_57512[(13)]);
var inst_57371 = cljs.core.seq.call(null,inst_57364);
var inst_57372 = inst_57371;
var inst_57373 = null;
var inst_57374 = (0);
var inst_57375 = (0);
var state_57512__$1 = (function (){var statearr_57566 = state_57512;
(statearr_57566[(7)] = inst_57375);

(statearr_57566[(8)] = inst_57372);

(statearr_57566[(9)] = inst_57373);

(statearr_57566[(10)] = inst_57374);

return statearr_57566;
})();
var statearr_57567_57637 = state_57512__$1;
(statearr_57567_57637[(2)] = null);

(statearr_57567_57637[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (23))){
var inst_57431 = (state_57512[(26)]);
var inst_57428 = (state_57512[(23)]);
var inst_57433 = (state_57512[(24)]);
var inst_57425 = (state_57512[(19)]);
var inst_57429 = (state_57512[(25)]);
var inst_57436 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_57438 = (function (){var all_files = inst_57425;
var res_SINGLEQUOTE_ = inst_57428;
var res = inst_57429;
var files_not_loaded = inst_57431;
var dependencies_that_loaded = inst_57433;
return (function (p__57437){
var map__57568 = p__57437;
var map__57568__$1 = (((((!((map__57568 == null))))?(((((map__57568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57568):map__57568);
var request_url = cljs.core.get.call(null,map__57568__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_57439 = cljs.core.reverse.call(null,inst_57433);
var inst_57440 = cljs.core.map.call(null,inst_57438,inst_57439);
var inst_57441 = cljs.core.pr_str.call(null,inst_57440);
var inst_57442 = figwheel.client.utils.log.call(null,inst_57441);
var state_57512__$1 = (function (){var statearr_57570 = state_57512;
(statearr_57570[(31)] = inst_57436);

return statearr_57570;
})();
var statearr_57571_57638 = state_57512__$1;
(statearr_57571_57638[(2)] = inst_57442);

(statearr_57571_57638[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (35))){
var state_57512__$1 = state_57512;
var statearr_57572_57639 = state_57512__$1;
(statearr_57572_57639[(2)] = true);

(statearr_57572_57639[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (19))){
var inst_57415 = (state_57512[(12)]);
var inst_57421 = figwheel.client.file_reloading.expand_files.call(null,inst_57415);
var state_57512__$1 = state_57512;
var statearr_57573_57640 = state_57512__$1;
(statearr_57573_57640[(2)] = inst_57421);

(statearr_57573_57640[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (11))){
var state_57512__$1 = state_57512;
var statearr_57574_57641 = state_57512__$1;
(statearr_57574_57641[(2)] = null);

(statearr_57574_57641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (9))){
var inst_57404 = (state_57512[(2)]);
var state_57512__$1 = state_57512;
var statearr_57575_57642 = state_57512__$1;
(statearr_57575_57642[(2)] = inst_57404);

(statearr_57575_57642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (5))){
var inst_57375 = (state_57512[(7)]);
var inst_57374 = (state_57512[(10)]);
var inst_57377 = (inst_57375 < inst_57374);
var inst_57378 = inst_57377;
var state_57512__$1 = state_57512;
if(cljs.core.truth_(inst_57378)){
var statearr_57576_57643 = state_57512__$1;
(statearr_57576_57643[(1)] = (7));

} else {
var statearr_57577_57644 = state_57512__$1;
(statearr_57577_57644[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (14))){
var inst_57385 = (state_57512[(22)]);
var inst_57394 = cljs.core.first.call(null,inst_57385);
var inst_57395 = figwheel.client.file_reloading.eval_body.call(null,inst_57394,opts);
var inst_57396 = cljs.core.next.call(null,inst_57385);
var inst_57372 = inst_57396;
var inst_57373 = null;
var inst_57374 = (0);
var inst_57375 = (0);
var state_57512__$1 = (function (){var statearr_57578 = state_57512;
(statearr_57578[(7)] = inst_57375);

(statearr_57578[(8)] = inst_57372);

(statearr_57578[(9)] = inst_57373);

(statearr_57578[(10)] = inst_57374);

(statearr_57578[(32)] = inst_57395);

return statearr_57578;
})();
var statearr_57579_57645 = state_57512__$1;
(statearr_57579_57645[(2)] = null);

(statearr_57579_57645[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (45))){
var state_57512__$1 = state_57512;
var statearr_57580_57646 = state_57512__$1;
(statearr_57580_57646[(2)] = null);

(statearr_57580_57646[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (26))){
var inst_57431 = (state_57512[(26)]);
var inst_57428 = (state_57512[(23)]);
var inst_57433 = (state_57512[(24)]);
var inst_57425 = (state_57512[(19)]);
var inst_57429 = (state_57512[(25)]);
var inst_57448 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_57450 = (function (){var all_files = inst_57425;
var res_SINGLEQUOTE_ = inst_57428;
var res = inst_57429;
var files_not_loaded = inst_57431;
var dependencies_that_loaded = inst_57433;
return (function (p__57449){
var map__57581 = p__57449;
var map__57581__$1 = (((((!((map__57581 == null))))?(((((map__57581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57581):map__57581);
var namespace = cljs.core.get.call(null,map__57581__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__57581__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_57451 = cljs.core.map.call(null,inst_57450,inst_57429);
var inst_57452 = cljs.core.pr_str.call(null,inst_57451);
var inst_57453 = figwheel.client.utils.log.call(null,inst_57452);
var inst_57454 = (function (){var all_files = inst_57425;
var res_SINGLEQUOTE_ = inst_57428;
var res = inst_57429;
var files_not_loaded = inst_57431;
var dependencies_that_loaded = inst_57433;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_57455 = setTimeout(inst_57454,(10));
var state_57512__$1 = (function (){var statearr_57583 = state_57512;
(statearr_57583[(33)] = inst_57448);

(statearr_57583[(34)] = inst_57453);

return statearr_57583;
})();
var statearr_57584_57647 = state_57512__$1;
(statearr_57584_57647[(2)] = inst_57455);

(statearr_57584_57647[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (16))){
var state_57512__$1 = state_57512;
var statearr_57585_57648 = state_57512__$1;
(statearr_57585_57648[(2)] = reload_dependents);

(statearr_57585_57648[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (38))){
var inst_57465 = (state_57512[(16)]);
var inst_57483 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57465);
var state_57512__$1 = state_57512;
var statearr_57586_57649 = state_57512__$1;
(statearr_57586_57649[(2)] = inst_57483);

(statearr_57586_57649[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (30))){
var state_57512__$1 = state_57512;
var statearr_57587_57650 = state_57512__$1;
(statearr_57587_57650[(2)] = null);

(statearr_57587_57650[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (10))){
var inst_57385 = (state_57512[(22)]);
var inst_57387 = cljs.core.chunked_seq_QMARK_.call(null,inst_57385);
var state_57512__$1 = state_57512;
if(inst_57387){
var statearr_57588_57651 = state_57512__$1;
(statearr_57588_57651[(1)] = (13));

} else {
var statearr_57589_57652 = state_57512__$1;
(statearr_57589_57652[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (18))){
var inst_57419 = (state_57512[(2)]);
var state_57512__$1 = state_57512;
if(cljs.core.truth_(inst_57419)){
var statearr_57590_57653 = state_57512__$1;
(statearr_57590_57653[(1)] = (19));

} else {
var statearr_57591_57654 = state_57512__$1;
(statearr_57591_57654[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (42))){
var state_57512__$1 = state_57512;
var statearr_57592_57655 = state_57512__$1;
(statearr_57592_57655[(2)] = null);

(statearr_57592_57655[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (37))){
var inst_57478 = (state_57512[(2)]);
var state_57512__$1 = state_57512;
var statearr_57593_57656 = state_57512__$1;
(statearr_57593_57656[(2)] = inst_57478);

(statearr_57593_57656[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (8))){
var inst_57372 = (state_57512[(8)]);
var inst_57385 = (state_57512[(22)]);
var inst_57385__$1 = cljs.core.seq.call(null,inst_57372);
var state_57512__$1 = (function (){var statearr_57594 = state_57512;
(statearr_57594[(22)] = inst_57385__$1);

return statearr_57594;
})();
if(inst_57385__$1){
var statearr_57595_57657 = state_57512__$1;
(statearr_57595_57657[(1)] = (10));

} else {
var statearr_57596_57658 = state_57512__$1;
(statearr_57596_57658[(1)] = (11));

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
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__49559__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__49559__auto____0 = (function (){
var statearr_57597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57597[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__49559__auto__);

(statearr_57597[(1)] = (1));

return statearr_57597;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__49559__auto____1 = (function (state_57512){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_57512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e57598){if((e57598 instanceof Object)){
var ex__49562__auto__ = e57598;
var statearr_57599_57659 = state_57512;
(statearr_57599_57659[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57660 = state_57512;
state_57512 = G__57660;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__49559__auto__ = function(state_57512){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__49559__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__49559__auto____1.call(this,state_57512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__49559__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__49559__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_57600 = f__49727__auto__.call(null);
(statearr_57600[(6)] = c__49726__auto__);

return statearr_57600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));

return c__49726__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__57663,link){
var map__57664 = p__57663;
var map__57664__$1 = (((((!((map__57664 == null))))?(((((map__57664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57664):map__57664);
var file = cljs.core.get.call(null,map__57664__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__57661_SHARP_,p2__57662_SHARP_){
if(cljs.core._EQ_.call(null,p1__57661_SHARP_,p2__57662_SHARP_)){
return p1__57661_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__57667){
var map__57668 = p__57667;
var map__57668__$1 = (((((!((map__57668 == null))))?(((((map__57668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57668):map__57668);
var match_length = cljs.core.get.call(null,map__57668__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__57668__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__57666_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__57666_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__57670_SHARP_,p2__57671_SHARP_){
return cljs.core.assoc.call(null,p1__57670_SHARP_,cljs.core.get.call(null,p2__57671_SHARP_,key),p2__57671_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_57672 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_57672);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_57672);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__57673,p__57674){
var map__57675 = p__57673;
var map__57675__$1 = (((((!((map__57675 == null))))?(((((map__57675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57675):map__57675);
var on_cssload = cljs.core.get.call(null,map__57675__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__57676 = p__57674;
var map__57676__$1 = (((((!((map__57676 == null))))?(((((map__57676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57676):map__57676);
var files_msg = map__57676__$1;
var files = cljs.core.get.call(null,map__57676__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1606929296979
