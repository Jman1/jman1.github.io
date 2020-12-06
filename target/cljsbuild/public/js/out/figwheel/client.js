// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e60116){if((e60116 instanceof Error)){
var e = e60116;
return "Error: Unable to stringify";
} else {
throw e60116;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__60119 = arguments.length;
switch (G__60119) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__60117_SHARP_){
if(typeof p1__60117_SHARP_ === 'string'){
return p1__60117_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__60117_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60122 = arguments.length;
var i__4737__auto___60123 = (0);
while(true){
if((i__4737__auto___60123 < len__4736__auto___60122)){
args__4742__auto__.push((arguments[i__4737__auto___60123]));

var G__60124 = (i__4737__auto___60123 + (1));
i__4737__auto___60123 = G__60124;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq60121){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60121));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60126 = arguments.length;
var i__4737__auto___60127 = (0);
while(true){
if((i__4737__auto___60127 < len__4736__auto___60126)){
args__4742__auto__.push((arguments[i__4737__auto___60127]));

var G__60128 = (i__4737__auto___60127 + (1));
i__4737__auto___60127 = G__60128;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq60125){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60125));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__60129){
var map__60130 = p__60129;
var map__60130__$1 = (((((!((map__60130 == null))))?(((((map__60130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60130):map__60130);
var message = cljs.core.get.call(null,map__60130__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__60130__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__49726__auto___60209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_60181){
var state_val_60182 = (state_60181[(1)]);
if((state_val_60182 === (7))){
var inst_60177 = (state_60181[(2)]);
var state_60181__$1 = state_60181;
var statearr_60183_60210 = state_60181__$1;
(statearr_60183_60210[(2)] = inst_60177);

(statearr_60183_60210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60182 === (1))){
var state_60181__$1 = state_60181;
var statearr_60184_60211 = state_60181__$1;
(statearr_60184_60211[(2)] = null);

(statearr_60184_60211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60182 === (4))){
var inst_60134 = (state_60181[(7)]);
var inst_60134__$1 = (state_60181[(2)]);
var state_60181__$1 = (function (){var statearr_60185 = state_60181;
(statearr_60185[(7)] = inst_60134__$1);

return statearr_60185;
})();
if(cljs.core.truth_(inst_60134__$1)){
var statearr_60186_60212 = state_60181__$1;
(statearr_60186_60212[(1)] = (5));

} else {
var statearr_60187_60213 = state_60181__$1;
(statearr_60187_60213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60182 === (15))){
var inst_60141 = (state_60181[(8)]);
var inst_60156 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_60141);
var inst_60157 = cljs.core.first.call(null,inst_60156);
var inst_60158 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_60157);
var inst_60159 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_60158)].join('');
var inst_60160 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_60159);
var state_60181__$1 = state_60181;
var statearr_60188_60214 = state_60181__$1;
(statearr_60188_60214[(2)] = inst_60160);

(statearr_60188_60214[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60182 === (13))){
var inst_60165 = (state_60181[(2)]);
var state_60181__$1 = state_60181;
var statearr_60189_60215 = state_60181__$1;
(statearr_60189_60215[(2)] = inst_60165);

(statearr_60189_60215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60182 === (6))){
var state_60181__$1 = state_60181;
var statearr_60190_60216 = state_60181__$1;
(statearr_60190_60216[(2)] = null);

(statearr_60190_60216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60182 === (17))){
var inst_60163 = (state_60181[(2)]);
var state_60181__$1 = state_60181;
var statearr_60191_60217 = state_60181__$1;
(statearr_60191_60217[(2)] = inst_60163);

(statearr_60191_60217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60182 === (3))){
var inst_60179 = (state_60181[(2)]);
var state_60181__$1 = state_60181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60181__$1,inst_60179);
} else {
if((state_val_60182 === (12))){
var inst_60140 = (state_60181[(9)]);
var inst_60154 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_60140,opts);
var state_60181__$1 = state_60181;
if(inst_60154){
var statearr_60192_60218 = state_60181__$1;
(statearr_60192_60218[(1)] = (15));

} else {
var statearr_60193_60219 = state_60181__$1;
(statearr_60193_60219[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60182 === (2))){
var state_60181__$1 = state_60181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60181__$1,(4),ch);
} else {
if((state_val_60182 === (11))){
var inst_60141 = (state_60181[(8)]);
var inst_60146 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60147 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_60141);
var inst_60148 = cljs.core.async.timeout.call(null,(1000));
var inst_60149 = [inst_60147,inst_60148];
var inst_60150 = (new cljs.core.PersistentVector(null,2,(5),inst_60146,inst_60149,null));
var state_60181__$1 = state_60181;
return cljs.core.async.ioc_alts_BANG_.call(null,state_60181__$1,(14),inst_60150);
} else {
if((state_val_60182 === (9))){
var inst_60141 = (state_60181[(8)]);
var inst_60167 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_60168 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_60141);
var inst_60169 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_60168);
var inst_60170 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_60169)].join('');
var inst_60171 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_60170);
var state_60181__$1 = (function (){var statearr_60194 = state_60181;
(statearr_60194[(10)] = inst_60167);

return statearr_60194;
})();
var statearr_60195_60220 = state_60181__$1;
(statearr_60195_60220[(2)] = inst_60171);

(statearr_60195_60220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60182 === (5))){
var inst_60134 = (state_60181[(7)]);
var inst_60136 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_60137 = (new cljs.core.PersistentArrayMap(null,2,inst_60136,null));
var inst_60138 = (new cljs.core.PersistentHashSet(null,inst_60137,null));
var inst_60139 = figwheel.client.focus_msgs.call(null,inst_60138,inst_60134);
var inst_60140 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_60139);
var inst_60141 = cljs.core.first.call(null,inst_60139);
var inst_60142 = figwheel.client.autoload_QMARK_.call(null);
var state_60181__$1 = (function (){var statearr_60196 = state_60181;
(statearr_60196[(9)] = inst_60140);

(statearr_60196[(8)] = inst_60141);

return statearr_60196;
})();
if(cljs.core.truth_(inst_60142)){
var statearr_60197_60221 = state_60181__$1;
(statearr_60197_60221[(1)] = (8));

} else {
var statearr_60198_60222 = state_60181__$1;
(statearr_60198_60222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60182 === (14))){
var inst_60152 = (state_60181[(2)]);
var state_60181__$1 = state_60181;
var statearr_60199_60223 = state_60181__$1;
(statearr_60199_60223[(2)] = inst_60152);

(statearr_60199_60223[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60182 === (16))){
var state_60181__$1 = state_60181;
var statearr_60200_60224 = state_60181__$1;
(statearr_60200_60224[(2)] = null);

(statearr_60200_60224[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60182 === (10))){
var inst_60173 = (state_60181[(2)]);
var state_60181__$1 = (function (){var statearr_60201 = state_60181;
(statearr_60201[(11)] = inst_60173);

return statearr_60201;
})();
var statearr_60202_60225 = state_60181__$1;
(statearr_60202_60225[(2)] = null);

(statearr_60202_60225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60182 === (8))){
var inst_60140 = (state_60181[(9)]);
var inst_60144 = figwheel.client.reload_file_state_QMARK_.call(null,inst_60140,opts);
var state_60181__$1 = state_60181;
if(cljs.core.truth_(inst_60144)){
var statearr_60203_60226 = state_60181__$1;
(statearr_60203_60226[(1)] = (11));

} else {
var statearr_60204_60227 = state_60181__$1;
(statearr_60204_60227[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__49559__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__49559__auto____0 = (function (){
var statearr_60205 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60205[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__49559__auto__);

(statearr_60205[(1)] = (1));

return statearr_60205;
});
var figwheel$client$file_reloader_plugin_$_state_machine__49559__auto____1 = (function (state_60181){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_60181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e60206){if((e60206 instanceof Object)){
var ex__49562__auto__ = e60206;
var statearr_60207_60228 = state_60181;
(statearr_60207_60228[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60229 = state_60181;
state_60181 = G__60229;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__49559__auto__ = function(state_60181){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__49559__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__49559__auto____1.call(this,state_60181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__49559__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__49559__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_60208 = f__49727__auto__.call(null);
(statearr_60208[(6)] = c__49726__auto___60209);

return statearr_60208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__60230_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__60230_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_60236 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60232 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60233 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60234 = true;
var _STAR_print_fn_STAR__temp_val__60235 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60234);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60235);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60233);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60232);
}}catch (e60231){if((e60231 instanceof Error)){
var e = e60231;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_60236], null));
} else {
var e = e60231;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__60237){
var map__60238 = p__60237;
var map__60238__$1 = (((((!((map__60238 == null))))?(((((map__60238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60238):map__60238);
var opts = map__60238__$1;
var build_id = cljs.core.get.call(null,map__60238__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__60240){
var vec__60241 = p__60240;
var seq__60242 = cljs.core.seq.call(null,vec__60241);
var first__60243 = cljs.core.first.call(null,seq__60242);
var seq__60242__$1 = cljs.core.next.call(null,seq__60242);
var map__60244 = first__60243;
var map__60244__$1 = (((((!((map__60244 == null))))?(((((map__60244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60244):map__60244);
var msg = map__60244__$1;
var msg_name = cljs.core.get.call(null,map__60244__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60242__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__60246){
var vec__60247 = p__60246;
var seq__60248 = cljs.core.seq.call(null,vec__60247);
var first__60249 = cljs.core.first.call(null,seq__60248);
var seq__60248__$1 = cljs.core.next.call(null,seq__60248);
var map__60250 = first__60249;
var map__60250__$1 = (((((!((map__60250 == null))))?(((((map__60250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60250):map__60250);
var msg = map__60250__$1;
var msg_name = cljs.core.get.call(null,map__60250__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60248__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__60252){
var map__60253 = p__60252;
var map__60253__$1 = (((((!((map__60253 == null))))?(((((map__60253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60253):map__60253);
var on_compile_warning = cljs.core.get.call(null,map__60253__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__60253__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__60255){
var vec__60256 = p__60255;
var seq__60257 = cljs.core.seq.call(null,vec__60256);
var first__60258 = cljs.core.first.call(null,seq__60257);
var seq__60257__$1 = cljs.core.next.call(null,seq__60257);
var map__60259 = first__60258;
var map__60259__$1 = (((((!((map__60259 == null))))?(((((map__60259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60259):map__60259);
var msg = map__60259__$1;
var msg_name = cljs.core.get.call(null,map__60259__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__60257__$1;
var pred__60261 = cljs.core._EQ_;
var expr__60262 = msg_name;
if(cljs.core.truth_(pred__60261.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__60262))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__60261.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__60262))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__49726__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_60351){
var state_val_60352 = (state_60351[(1)]);
if((state_val_60352 === (7))){
var inst_60271 = (state_60351[(2)]);
var state_60351__$1 = state_60351;
if(cljs.core.truth_(inst_60271)){
var statearr_60353_60400 = state_60351__$1;
(statearr_60353_60400[(1)] = (8));

} else {
var statearr_60354_60401 = state_60351__$1;
(statearr_60354_60401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (20))){
var inst_60345 = (state_60351[(2)]);
var state_60351__$1 = state_60351;
var statearr_60355_60402 = state_60351__$1;
(statearr_60355_60402[(2)] = inst_60345);

(statearr_60355_60402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (27))){
var inst_60341 = (state_60351[(2)]);
var state_60351__$1 = state_60351;
var statearr_60356_60403 = state_60351__$1;
(statearr_60356_60403[(2)] = inst_60341);

(statearr_60356_60403[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (1))){
var inst_60264 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_60351__$1 = state_60351;
if(cljs.core.truth_(inst_60264)){
var statearr_60357_60404 = state_60351__$1;
(statearr_60357_60404[(1)] = (2));

} else {
var statearr_60358_60405 = state_60351__$1;
(statearr_60358_60405[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (24))){
var inst_60343 = (state_60351[(2)]);
var state_60351__$1 = state_60351;
var statearr_60359_60406 = state_60351__$1;
(statearr_60359_60406[(2)] = inst_60343);

(statearr_60359_60406[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (4))){
var inst_60349 = (state_60351[(2)]);
var state_60351__$1 = state_60351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60351__$1,inst_60349);
} else {
if((state_val_60352 === (15))){
var inst_60347 = (state_60351[(2)]);
var state_60351__$1 = state_60351;
var statearr_60360_60407 = state_60351__$1;
(statearr_60360_60407[(2)] = inst_60347);

(statearr_60360_60407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (21))){
var inst_60300 = (state_60351[(2)]);
var inst_60301 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60302 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60301);
var state_60351__$1 = (function (){var statearr_60361 = state_60351;
(statearr_60361[(7)] = inst_60300);

return statearr_60361;
})();
var statearr_60362_60408 = state_60351__$1;
(statearr_60362_60408[(2)] = inst_60302);

(statearr_60362_60408[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (31))){
var inst_60330 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_60351__$1 = state_60351;
if(inst_60330){
var statearr_60363_60409 = state_60351__$1;
(statearr_60363_60409[(1)] = (34));

} else {
var statearr_60364_60410 = state_60351__$1;
(statearr_60364_60410[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (32))){
var inst_60339 = (state_60351[(2)]);
var state_60351__$1 = state_60351;
var statearr_60365_60411 = state_60351__$1;
(statearr_60365_60411[(2)] = inst_60339);

(statearr_60365_60411[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (33))){
var inst_60326 = (state_60351[(2)]);
var inst_60327 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60328 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60327);
var state_60351__$1 = (function (){var statearr_60366 = state_60351;
(statearr_60366[(8)] = inst_60326);

return statearr_60366;
})();
var statearr_60367_60412 = state_60351__$1;
(statearr_60367_60412[(2)] = inst_60328);

(statearr_60367_60412[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (13))){
var inst_60285 = figwheel.client.heads_up.clear.call(null);
var state_60351__$1 = state_60351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60351__$1,(16),inst_60285);
} else {
if((state_val_60352 === (22))){
var inst_60306 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60307 = figwheel.client.heads_up.append_warning_message.call(null,inst_60306);
var state_60351__$1 = state_60351;
var statearr_60368_60413 = state_60351__$1;
(statearr_60368_60413[(2)] = inst_60307);

(statearr_60368_60413[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (36))){
var inst_60337 = (state_60351[(2)]);
var state_60351__$1 = state_60351;
var statearr_60369_60414 = state_60351__$1;
(statearr_60369_60414[(2)] = inst_60337);

(statearr_60369_60414[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (29))){
var inst_60317 = (state_60351[(2)]);
var inst_60318 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60319 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60318);
var state_60351__$1 = (function (){var statearr_60370 = state_60351;
(statearr_60370[(9)] = inst_60317);

return statearr_60370;
})();
var statearr_60371_60415 = state_60351__$1;
(statearr_60371_60415[(2)] = inst_60319);

(statearr_60371_60415[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (6))){
var inst_60266 = (state_60351[(10)]);
var state_60351__$1 = state_60351;
var statearr_60372_60416 = state_60351__$1;
(statearr_60372_60416[(2)] = inst_60266);

(statearr_60372_60416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (28))){
var inst_60313 = (state_60351[(2)]);
var inst_60314 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60315 = figwheel.client.heads_up.display_warning.call(null,inst_60314);
var state_60351__$1 = (function (){var statearr_60373 = state_60351;
(statearr_60373[(11)] = inst_60313);

return statearr_60373;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60351__$1,(29),inst_60315);
} else {
if((state_val_60352 === (25))){
var inst_60311 = figwheel.client.heads_up.clear.call(null);
var state_60351__$1 = state_60351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60351__$1,(28),inst_60311);
} else {
if((state_val_60352 === (34))){
var inst_60332 = figwheel.client.heads_up.flash_loaded.call(null);
var state_60351__$1 = state_60351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60351__$1,(37),inst_60332);
} else {
if((state_val_60352 === (17))){
var inst_60291 = (state_60351[(2)]);
var inst_60292 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60293 = figwheel.client.auto_jump_to_error.call(null,opts,inst_60292);
var state_60351__$1 = (function (){var statearr_60374 = state_60351;
(statearr_60374[(12)] = inst_60291);

return statearr_60374;
})();
var statearr_60375_60417 = state_60351__$1;
(statearr_60375_60417[(2)] = inst_60293);

(statearr_60375_60417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (3))){
var inst_60283 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_60351__$1 = state_60351;
if(inst_60283){
var statearr_60376_60418 = state_60351__$1;
(statearr_60376_60418[(1)] = (13));

} else {
var statearr_60377_60419 = state_60351__$1;
(statearr_60377_60419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (12))){
var inst_60279 = (state_60351[(2)]);
var state_60351__$1 = state_60351;
var statearr_60378_60420 = state_60351__$1;
(statearr_60378_60420[(2)] = inst_60279);

(statearr_60378_60420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (2))){
var inst_60266 = (state_60351[(10)]);
var inst_60266__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_60351__$1 = (function (){var statearr_60379 = state_60351;
(statearr_60379[(10)] = inst_60266__$1);

return statearr_60379;
})();
if(cljs.core.truth_(inst_60266__$1)){
var statearr_60380_60421 = state_60351__$1;
(statearr_60380_60421[(1)] = (5));

} else {
var statearr_60381_60422 = state_60351__$1;
(statearr_60381_60422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (23))){
var inst_60309 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_60351__$1 = state_60351;
if(inst_60309){
var statearr_60382_60423 = state_60351__$1;
(statearr_60382_60423[(1)] = (25));

} else {
var statearr_60383_60424 = state_60351__$1;
(statearr_60383_60424[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (35))){
var state_60351__$1 = state_60351;
var statearr_60384_60425 = state_60351__$1;
(statearr_60384_60425[(2)] = null);

(statearr_60384_60425[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (19))){
var inst_60304 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_60351__$1 = state_60351;
if(inst_60304){
var statearr_60385_60426 = state_60351__$1;
(statearr_60385_60426[(1)] = (22));

} else {
var statearr_60386_60427 = state_60351__$1;
(statearr_60386_60427[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (11))){
var inst_60275 = (state_60351[(2)]);
var state_60351__$1 = state_60351;
var statearr_60387_60428 = state_60351__$1;
(statearr_60387_60428[(2)] = inst_60275);

(statearr_60387_60428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (9))){
var inst_60277 = figwheel.client.heads_up.clear.call(null);
var state_60351__$1 = state_60351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60351__$1,(12),inst_60277);
} else {
if((state_val_60352 === (5))){
var inst_60268 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_60351__$1 = state_60351;
var statearr_60388_60429 = state_60351__$1;
(statearr_60388_60429[(2)] = inst_60268);

(statearr_60388_60429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (14))){
var inst_60295 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_60351__$1 = state_60351;
if(inst_60295){
var statearr_60389_60430 = state_60351__$1;
(statearr_60389_60430[(1)] = (18));

} else {
var statearr_60390_60431 = state_60351__$1;
(statearr_60390_60431[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (26))){
var inst_60321 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_60351__$1 = state_60351;
if(inst_60321){
var statearr_60391_60432 = state_60351__$1;
(statearr_60391_60432[(1)] = (30));

} else {
var statearr_60392_60433 = state_60351__$1;
(statearr_60392_60433[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (16))){
var inst_60287 = (state_60351[(2)]);
var inst_60288 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60289 = figwheel.client.heads_up.display_exception.call(null,inst_60288);
var state_60351__$1 = (function (){var statearr_60393 = state_60351;
(statearr_60393[(13)] = inst_60287);

return statearr_60393;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60351__$1,(17),inst_60289);
} else {
if((state_val_60352 === (30))){
var inst_60323 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60324 = figwheel.client.heads_up.display_warning.call(null,inst_60323);
var state_60351__$1 = state_60351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60351__$1,(33),inst_60324);
} else {
if((state_val_60352 === (10))){
var inst_60281 = (state_60351[(2)]);
var state_60351__$1 = state_60351;
var statearr_60394_60434 = state_60351__$1;
(statearr_60394_60434[(2)] = inst_60281);

(statearr_60394_60434[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (18))){
var inst_60297 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_60298 = figwheel.client.heads_up.display_exception.call(null,inst_60297);
var state_60351__$1 = state_60351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60351__$1,(21),inst_60298);
} else {
if((state_val_60352 === (37))){
var inst_60334 = (state_60351[(2)]);
var state_60351__$1 = state_60351;
var statearr_60395_60435 = state_60351__$1;
(statearr_60395_60435[(2)] = inst_60334);

(statearr_60395_60435[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60352 === (8))){
var inst_60273 = figwheel.client.heads_up.flash_loaded.call(null);
var state_60351__$1 = state_60351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60351__$1,(11),inst_60273);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49559__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49559__auto____0 = (function (){
var statearr_60396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60396[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49559__auto__);

(statearr_60396[(1)] = (1));

return statearr_60396;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49559__auto____1 = (function (state_60351){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_60351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e60397){if((e60397 instanceof Object)){
var ex__49562__auto__ = e60397;
var statearr_60398_60436 = state_60351;
(statearr_60398_60436[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60437 = state_60351;
state_60351 = G__60437;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49559__auto__ = function(state_60351){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49559__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49559__auto____1.call(this,state_60351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49559__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49559__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_60399 = f__49727__auto__.call(null);
(statearr_60399[(6)] = c__49726__auto__);

return statearr_60399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));

return c__49726__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__49726__auto___60466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_60452){
var state_val_60453 = (state_60452[(1)]);
if((state_val_60453 === (1))){
var state_60452__$1 = state_60452;
var statearr_60454_60467 = state_60452__$1;
(statearr_60454_60467[(2)] = null);

(statearr_60454_60467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60453 === (2))){
var state_60452__$1 = state_60452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60452__$1,(4),ch);
} else {
if((state_val_60453 === (3))){
var inst_60450 = (state_60452[(2)]);
var state_60452__$1 = state_60452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60452__$1,inst_60450);
} else {
if((state_val_60453 === (4))){
var inst_60440 = (state_60452[(7)]);
var inst_60440__$1 = (state_60452[(2)]);
var state_60452__$1 = (function (){var statearr_60455 = state_60452;
(statearr_60455[(7)] = inst_60440__$1);

return statearr_60455;
})();
if(cljs.core.truth_(inst_60440__$1)){
var statearr_60456_60468 = state_60452__$1;
(statearr_60456_60468[(1)] = (5));

} else {
var statearr_60457_60469 = state_60452__$1;
(statearr_60457_60469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60453 === (5))){
var inst_60440 = (state_60452[(7)]);
var inst_60442 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_60440);
var state_60452__$1 = state_60452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60452__$1,(8),inst_60442);
} else {
if((state_val_60453 === (6))){
var state_60452__$1 = state_60452;
var statearr_60458_60470 = state_60452__$1;
(statearr_60458_60470[(2)] = null);

(statearr_60458_60470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60453 === (7))){
var inst_60448 = (state_60452[(2)]);
var state_60452__$1 = state_60452;
var statearr_60459_60471 = state_60452__$1;
(statearr_60459_60471[(2)] = inst_60448);

(statearr_60459_60471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60453 === (8))){
var inst_60444 = (state_60452[(2)]);
var state_60452__$1 = (function (){var statearr_60460 = state_60452;
(statearr_60460[(8)] = inst_60444);

return statearr_60460;
})();
var statearr_60461_60472 = state_60452__$1;
(statearr_60461_60472[(2)] = null);

(statearr_60461_60472[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__49559__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__49559__auto____0 = (function (){
var statearr_60462 = [null,null,null,null,null,null,null,null,null];
(statearr_60462[(0)] = figwheel$client$heads_up_plugin_$_state_machine__49559__auto__);

(statearr_60462[(1)] = (1));

return statearr_60462;
});
var figwheel$client$heads_up_plugin_$_state_machine__49559__auto____1 = (function (state_60452){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_60452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e60463){if((e60463 instanceof Object)){
var ex__49562__auto__ = e60463;
var statearr_60464_60473 = state_60452;
(statearr_60464_60473[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60474 = state_60452;
state_60452 = G__60474;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__49559__auto__ = function(state_60452){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__49559__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__49559__auto____1.call(this,state_60452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__49559__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__49559__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_60465 = f__49727__auto__.call(null);
(statearr_60465[(6)] = c__49726__auto___60466);

return statearr_60465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__49726__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_60480){
var state_val_60481 = (state_60480[(1)]);
if((state_val_60481 === (1))){
var inst_60475 = cljs.core.async.timeout.call(null,(3000));
var state_60480__$1 = state_60480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60480__$1,(2),inst_60475);
} else {
if((state_val_60481 === (2))){
var inst_60477 = (state_60480[(2)]);
var inst_60478 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_60480__$1 = (function (){var statearr_60482 = state_60480;
(statearr_60482[(7)] = inst_60477);

return statearr_60482;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60480__$1,inst_60478);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__49559__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__49559__auto____0 = (function (){
var statearr_60483 = [null,null,null,null,null,null,null,null];
(statearr_60483[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__49559__auto__);

(statearr_60483[(1)] = (1));

return statearr_60483;
});
var figwheel$client$enforce_project_plugin_$_state_machine__49559__auto____1 = (function (state_60480){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_60480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e60484){if((e60484 instanceof Object)){
var ex__49562__auto__ = e60484;
var statearr_60485_60487 = state_60480;
(statearr_60485_60487[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60488 = state_60480;
state_60480 = G__60488;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__49559__auto__ = function(state_60480){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__49559__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__49559__auto____1.call(this,state_60480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__49559__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__49559__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_60486 = f__49727__auto__.call(null);
(statearr_60486[(6)] = c__49726__auto__);

return statearr_60486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));

return c__49726__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__49726__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_60495){
var state_val_60496 = (state_60495[(1)]);
if((state_val_60496 === (1))){
var inst_60489 = cljs.core.async.timeout.call(null,(2000));
var state_60495__$1 = state_60495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60495__$1,(2),inst_60489);
} else {
if((state_val_60496 === (2))){
var inst_60491 = (state_60495[(2)]);
var inst_60492 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_60493 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_60492);
var state_60495__$1 = (function (){var statearr_60497 = state_60495;
(statearr_60497[(7)] = inst_60491);

return statearr_60497;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60495__$1,inst_60493);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49559__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49559__auto____0 = (function (){
var statearr_60498 = [null,null,null,null,null,null,null,null];
(statearr_60498[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49559__auto__);

(statearr_60498[(1)] = (1));

return statearr_60498;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49559__auto____1 = (function (state_60495){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_60495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e60499){if((e60499 instanceof Object)){
var ex__49562__auto__ = e60499;
var statearr_60500_60502 = state_60495;
(statearr_60500_60502[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60503 = state_60495;
state_60495 = G__60503;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49559__auto__ = function(state_60495){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49559__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49559__auto____1.call(this,state_60495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49559__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49559__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_60501 = f__49727__auto__.call(null);
(statearr_60501[(6)] = c__49726__auto__);

return statearr_60501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));

return c__49726__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__60504){
var map__60505 = p__60504;
var map__60505__$1 = (((((!((map__60505 == null))))?(((((map__60505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60505):map__60505);
var file = cljs.core.get.call(null,map__60505__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__60505__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__60505__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__60507 = "";
var G__60507__$1 = (cljs.core.truth_(file)?[G__60507,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__60507);
var G__60507__$2 = (cljs.core.truth_(line)?[G__60507__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__60507__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__60507__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__60507__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__60508){
var map__60509 = p__60508;
var map__60509__$1 = (((((!((map__60509 == null))))?(((((map__60509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60509):map__60509);
var ed = map__60509__$1;
var exception_data = cljs.core.get.call(null,map__60509__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__60509__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_60512 = (function (){var G__60511 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60511)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__60511;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_60512);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__60513){
var map__60514 = p__60513;
var map__60514__$1 = (((((!((map__60514 == null))))?(((((map__60514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60514):map__60514);
var w = map__60514__$1;
var message = cljs.core.get.call(null,map__60514__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__60516 = cljs.core.seq.call(null,plugins);
var chunk__60517 = null;
var count__60518 = (0);
var i__60519 = (0);
while(true){
if((i__60519 < count__60518)){
var vec__60526 = cljs.core._nth.call(null,chunk__60517,i__60519);
var k = cljs.core.nth.call(null,vec__60526,(0),null);
var plugin = cljs.core.nth.call(null,vec__60526,(1),null);
if(cljs.core.truth_(plugin)){
var pl_60532 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__60516,chunk__60517,count__60518,i__60519,pl_60532,vec__60526,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_60532.call(null,msg_hist);
});})(seq__60516,chunk__60517,count__60518,i__60519,pl_60532,vec__60526,k,plugin))
);
} else {
}


var G__60533 = seq__60516;
var G__60534 = chunk__60517;
var G__60535 = count__60518;
var G__60536 = (i__60519 + (1));
seq__60516 = G__60533;
chunk__60517 = G__60534;
count__60518 = G__60535;
i__60519 = G__60536;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__60516);
if(temp__5735__auto__){
var seq__60516__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60516__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__60516__$1);
var G__60537 = cljs.core.chunk_rest.call(null,seq__60516__$1);
var G__60538 = c__4556__auto__;
var G__60539 = cljs.core.count.call(null,c__4556__auto__);
var G__60540 = (0);
seq__60516 = G__60537;
chunk__60517 = G__60538;
count__60518 = G__60539;
i__60519 = G__60540;
continue;
} else {
var vec__60529 = cljs.core.first.call(null,seq__60516__$1);
var k = cljs.core.nth.call(null,vec__60529,(0),null);
var plugin = cljs.core.nth.call(null,vec__60529,(1),null);
if(cljs.core.truth_(plugin)){
var pl_60541 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__60516,chunk__60517,count__60518,i__60519,pl_60541,vec__60529,k,plugin,seq__60516__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_60541.call(null,msg_hist);
});})(seq__60516,chunk__60517,count__60518,i__60519,pl_60541,vec__60529,k,plugin,seq__60516__$1,temp__5735__auto__))
);
} else {
}


var G__60542 = cljs.core.next.call(null,seq__60516__$1);
var G__60543 = null;
var G__60544 = (0);
var G__60545 = (0);
seq__60516 = G__60542;
chunk__60517 = G__60543;
count__60518 = G__60544;
i__60519 = G__60545;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__60547 = arguments.length;
switch (G__60547) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__60548_60553 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__60549_60554 = null;
var count__60550_60555 = (0);
var i__60551_60556 = (0);
while(true){
if((i__60551_60556 < count__60550_60555)){
var msg_60557 = cljs.core._nth.call(null,chunk__60549_60554,i__60551_60556);
figwheel.client.socket.handle_incoming_message.call(null,msg_60557);


var G__60558 = seq__60548_60553;
var G__60559 = chunk__60549_60554;
var G__60560 = count__60550_60555;
var G__60561 = (i__60551_60556 + (1));
seq__60548_60553 = G__60558;
chunk__60549_60554 = G__60559;
count__60550_60555 = G__60560;
i__60551_60556 = G__60561;
continue;
} else {
var temp__5735__auto___60562 = cljs.core.seq.call(null,seq__60548_60553);
if(temp__5735__auto___60562){
var seq__60548_60563__$1 = temp__5735__auto___60562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60548_60563__$1)){
var c__4556__auto___60564 = cljs.core.chunk_first.call(null,seq__60548_60563__$1);
var G__60565 = cljs.core.chunk_rest.call(null,seq__60548_60563__$1);
var G__60566 = c__4556__auto___60564;
var G__60567 = cljs.core.count.call(null,c__4556__auto___60564);
var G__60568 = (0);
seq__60548_60553 = G__60565;
chunk__60549_60554 = G__60566;
count__60550_60555 = G__60567;
i__60551_60556 = G__60568;
continue;
} else {
var msg_60569 = cljs.core.first.call(null,seq__60548_60563__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_60569);


var G__60570 = cljs.core.next.call(null,seq__60548_60563__$1);
var G__60571 = null;
var G__60572 = (0);
var G__60573 = (0);
seq__60548_60553 = G__60570;
chunk__60549_60554 = G__60571;
count__60550_60555 = G__60572;
i__60551_60556 = G__60573;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60578 = arguments.length;
var i__4737__auto___60579 = (0);
while(true){
if((i__4737__auto___60579 < len__4736__auto___60578)){
args__4742__auto__.push((arguments[i__4737__auto___60579]));

var G__60580 = (i__4737__auto___60579 + (1));
i__4737__auto___60579 = G__60580;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__60575){
var map__60576 = p__60575;
var map__60576__$1 = (((((!((map__60576 == null))))?(((((map__60576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60576):map__60576);
var opts = map__60576__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq60574){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60574));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e60581){if((e60581 instanceof Error)){
var e = e60581;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e60581;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__60582){
var map__60583 = p__60582;
var map__60583__$1 = (((((!((map__60583 == null))))?(((((map__60583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60583):map__60583);
var msg_name = cljs.core.get.call(null,map__60583__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1606929298957
