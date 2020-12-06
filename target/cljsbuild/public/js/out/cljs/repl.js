// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__59106){
var map__59107 = p__59106;
var map__59107__$1 = (((((!((map__59107 == null))))?(((((map__59107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59107):map__59107);
var m = map__59107__$1;
var n = cljs.core.get.call(null,map__59107__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__59107__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__59109_59141 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59110_59142 = null;
var count__59111_59143 = (0);
var i__59112_59144 = (0);
while(true){
if((i__59112_59144 < count__59111_59143)){
var f_59145 = cljs.core._nth.call(null,chunk__59110_59142,i__59112_59144);
cljs.core.println.call(null,"  ",f_59145);


var G__59146 = seq__59109_59141;
var G__59147 = chunk__59110_59142;
var G__59148 = count__59111_59143;
var G__59149 = (i__59112_59144 + (1));
seq__59109_59141 = G__59146;
chunk__59110_59142 = G__59147;
count__59111_59143 = G__59148;
i__59112_59144 = G__59149;
continue;
} else {
var temp__5735__auto___59150 = cljs.core.seq.call(null,seq__59109_59141);
if(temp__5735__auto___59150){
var seq__59109_59151__$1 = temp__5735__auto___59150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59109_59151__$1)){
var c__4556__auto___59152 = cljs.core.chunk_first.call(null,seq__59109_59151__$1);
var G__59153 = cljs.core.chunk_rest.call(null,seq__59109_59151__$1);
var G__59154 = c__4556__auto___59152;
var G__59155 = cljs.core.count.call(null,c__4556__auto___59152);
var G__59156 = (0);
seq__59109_59141 = G__59153;
chunk__59110_59142 = G__59154;
count__59111_59143 = G__59155;
i__59112_59144 = G__59156;
continue;
} else {
var f_59157 = cljs.core.first.call(null,seq__59109_59151__$1);
cljs.core.println.call(null,"  ",f_59157);


var G__59158 = cljs.core.next.call(null,seq__59109_59151__$1);
var G__59159 = null;
var G__59160 = (0);
var G__59161 = (0);
seq__59109_59141 = G__59158;
chunk__59110_59142 = G__59159;
count__59111_59143 = G__59160;
i__59112_59144 = G__59161;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_59162 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_59162);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_59162)))?cljs.core.second.call(null,arglists_59162):arglists_59162));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__59113_59163 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59114_59164 = null;
var count__59115_59165 = (0);
var i__59116_59166 = (0);
while(true){
if((i__59116_59166 < count__59115_59165)){
var vec__59127_59167 = cljs.core._nth.call(null,chunk__59114_59164,i__59116_59166);
var name_59168 = cljs.core.nth.call(null,vec__59127_59167,(0),null);
var map__59130_59169 = cljs.core.nth.call(null,vec__59127_59167,(1),null);
var map__59130_59170__$1 = (((((!((map__59130_59169 == null))))?(((((map__59130_59169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59130_59169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59130_59169):map__59130_59169);
var doc_59171 = cljs.core.get.call(null,map__59130_59170__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59172 = cljs.core.get.call(null,map__59130_59170__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_59168);

cljs.core.println.call(null," ",arglists_59172);

if(cljs.core.truth_(doc_59171)){
cljs.core.println.call(null," ",doc_59171);
} else {
}


var G__59173 = seq__59113_59163;
var G__59174 = chunk__59114_59164;
var G__59175 = count__59115_59165;
var G__59176 = (i__59116_59166 + (1));
seq__59113_59163 = G__59173;
chunk__59114_59164 = G__59174;
count__59115_59165 = G__59175;
i__59116_59166 = G__59176;
continue;
} else {
var temp__5735__auto___59177 = cljs.core.seq.call(null,seq__59113_59163);
if(temp__5735__auto___59177){
var seq__59113_59178__$1 = temp__5735__auto___59177;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59113_59178__$1)){
var c__4556__auto___59179 = cljs.core.chunk_first.call(null,seq__59113_59178__$1);
var G__59180 = cljs.core.chunk_rest.call(null,seq__59113_59178__$1);
var G__59181 = c__4556__auto___59179;
var G__59182 = cljs.core.count.call(null,c__4556__auto___59179);
var G__59183 = (0);
seq__59113_59163 = G__59180;
chunk__59114_59164 = G__59181;
count__59115_59165 = G__59182;
i__59116_59166 = G__59183;
continue;
} else {
var vec__59132_59184 = cljs.core.first.call(null,seq__59113_59178__$1);
var name_59185 = cljs.core.nth.call(null,vec__59132_59184,(0),null);
var map__59135_59186 = cljs.core.nth.call(null,vec__59132_59184,(1),null);
var map__59135_59187__$1 = (((((!((map__59135_59186 == null))))?(((((map__59135_59186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59135_59186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59135_59186):map__59135_59186);
var doc_59188 = cljs.core.get.call(null,map__59135_59187__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59189 = cljs.core.get.call(null,map__59135_59187__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_59185);

cljs.core.println.call(null," ",arglists_59189);

if(cljs.core.truth_(doc_59188)){
cljs.core.println.call(null," ",doc_59188);
} else {
}


var G__59190 = cljs.core.next.call(null,seq__59113_59178__$1);
var G__59191 = null;
var G__59192 = (0);
var G__59193 = (0);
seq__59113_59163 = G__59190;
chunk__59114_59164 = G__59191;
count__59115_59165 = G__59192;
i__59116_59166 = G__59193;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__59137 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__59138 = null;
var count__59139 = (0);
var i__59140 = (0);
while(true){
if((i__59140 < count__59139)){
var role = cljs.core._nth.call(null,chunk__59138,i__59140);
var temp__5735__auto___59194__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___59194__$1)){
var spec_59195 = temp__5735__auto___59194__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_59195));
} else {
}


var G__59196 = seq__59137;
var G__59197 = chunk__59138;
var G__59198 = count__59139;
var G__59199 = (i__59140 + (1));
seq__59137 = G__59196;
chunk__59138 = G__59197;
count__59139 = G__59198;
i__59140 = G__59199;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__59137);
if(temp__5735__auto____$1){
var seq__59137__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59137__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__59137__$1);
var G__59200 = cljs.core.chunk_rest.call(null,seq__59137__$1);
var G__59201 = c__4556__auto__;
var G__59202 = cljs.core.count.call(null,c__4556__auto__);
var G__59203 = (0);
seq__59137 = G__59200;
chunk__59138 = G__59201;
count__59139 = G__59202;
i__59140 = G__59203;
continue;
} else {
var role = cljs.core.first.call(null,seq__59137__$1);
var temp__5735__auto___59204__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___59204__$2)){
var spec_59205 = temp__5735__auto___59204__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_59205));
} else {
}


var G__59206 = cljs.core.next.call(null,seq__59137__$1);
var G__59207 = null;
var G__59208 = (0);
var G__59209 = (0);
seq__59137 = G__59206;
chunk__59138 = G__59207;
count__59139 = G__59208;
i__59140 = G__59209;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__59210 = cljs.core.conj.call(null,via,t);
var G__59211 = cljs.core.ex_cause.call(null,t);
via = G__59210;
t = G__59211;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__59214 = datafied_throwable;
var map__59214__$1 = (((((!((map__59214 == null))))?(((((map__59214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59214):map__59214);
var via = cljs.core.get.call(null,map__59214__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__59214__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__59214__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__59215 = cljs.core.last.call(null,via);
var map__59215__$1 = (((((!((map__59215 == null))))?(((((map__59215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59215):map__59215);
var type = cljs.core.get.call(null,map__59215__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__59215__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__59215__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__59216 = data;
var map__59216__$1 = (((((!((map__59216 == null))))?(((((map__59216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59216):map__59216);
var problems = cljs.core.get.call(null,map__59216__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__59216__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__59216__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__59217 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__59217__$1 = (((((!((map__59217 == null))))?(((((map__59217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59217):map__59217);
var top_data = map__59217__$1;
var source = cljs.core.get.call(null,map__59217__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__59222 = phase;
var G__59222__$1 = (((G__59222 instanceof cljs.core.Keyword))?G__59222.fqn:null);
switch (G__59222__$1) {
case "read-source":
var map__59223 = data;
var map__59223__$1 = (((((!((map__59223 == null))))?(((((map__59223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59223):map__59223);
var line = cljs.core.get.call(null,map__59223__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__59223__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__59225 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__59225__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__59225,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59225);
var G__59225__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__59225__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59225__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__59225__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59225__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__59226 = top_data;
var G__59226__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__59226,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59226);
var G__59226__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__59226__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59226__$1);
var G__59226__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__59226__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59226__$2);
var G__59226__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__59226__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59226__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__59226__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59226__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__59227 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__59227,(0),null);
var method = cljs.core.nth.call(null,vec__59227,(1),null);
var file = cljs.core.nth.call(null,vec__59227,(2),null);
var line = cljs.core.nth.call(null,vec__59227,(3),null);
var G__59230 = top_data;
var G__59230__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__59230,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__59230);
var G__59230__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__59230__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__59230__$1);
var G__59230__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__59230__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__59230__$2);
var G__59230__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__59230__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59230__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__59230__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59230__$4;
}

break;
case "execution":
var vec__59231 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__59231,(0),null);
var method = cljs.core.nth.call(null,vec__59231,(1),null);
var file = cljs.core.nth.call(null,vec__59231,(2),null);
var line = cljs.core.nth.call(null,vec__59231,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__59213_SHARP_){
var or__4126__auto__ = (p1__59213_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__59213_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__59234 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__59234__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__59234,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__59234);
var G__59234__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__59234__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59234__$1);
var G__59234__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__59234__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__59234__$2);
var G__59234__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__59234__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__59234__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__59234__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59234__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59222__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__59238){
var map__59239 = p__59238;
var map__59239__$1 = (((((!((map__59239 == null))))?(((((map__59239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59239):map__59239);
var triage_data = map__59239__$1;
var phase = cljs.core.get.call(null,map__59239__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__59239__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__59239__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__59239__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__59239__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__59239__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__59239__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__59239__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__59241 = phase;
var G__59241__$1 = (((G__59241 instanceof cljs.core.Keyword))?G__59241.fqn:null);
switch (G__59241__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59242_59251 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59243_59252 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59244_59253 = true;
var _STAR_print_fn_STAR__temp_val__59245_59254 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59244_59253);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59245_59254);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__59236_SHARP_){
return cljs.core.dissoc.call(null,p1__59236_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59243_59252);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59242_59251);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59246_59255 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59247_59256 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59248_59257 = true;
var _STAR_print_fn_STAR__temp_val__59249_59258 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59248_59257);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59249_59258);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__59237_SHARP_){
return cljs.core.dissoc.call(null,p1__59237_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59247_59256);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59246_59255);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59241__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1606929298218
