// Compiled by ClojureScript 1.10.773 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__42302){
var map__42303 = p__42302;
var map__42303__$1 = (((((!((map__42303 == null))))?(((((map__42303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42303):map__42303);
var replacement_transformers = cljs.core.get.call(null,map__42303__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__42303__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__42303__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__42305 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__42306 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__42306);

try{var vec__42307 = cljs.core.reduce.call(null,(function (p__42310,transformer){
var vec__42311 = p__42310;
var text = cljs.core.nth.call(null,vec__42311,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__42311,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4126__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__42307,(0),null);
var new_state = cljs.core.nth.call(null,vec__42307,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__42305);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42316 = arguments.length;
var i__4737__auto___42317 = (0);
while(true){
if((i__4737__auto___42317 < len__4736__auto___42316)){
args__4742__auto__.push((arguments[i__4737__auto___42317]));

var G__42318 = (i__4737__auto___42317 + (1));
i__4737__auto___42317 = G__42318;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq42314){
var G__42315 = cljs.core.first.call(null,seq42314);
var seq42314__$1 = cljs.core.next.call(null,seq42314);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42315,seq42314__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__42319_42323 = cljs.core.seq.call(null,lines);
var chunk__42320_42324 = null;
var count__42321_42325 = (0);
var i__42322_42326 = (0);
while(true){
if((i__42322_42326 < count__42321_42325)){
var line_42327 = cljs.core._nth.call(null,chunk__42320_42324,i__42322_42326);
markdown.links.parse_reference_link.call(null,line_42327,references);


var G__42328 = seq__42319_42323;
var G__42329 = chunk__42320_42324;
var G__42330 = count__42321_42325;
var G__42331 = (i__42322_42326 + (1));
seq__42319_42323 = G__42328;
chunk__42320_42324 = G__42329;
count__42321_42325 = G__42330;
i__42322_42326 = G__42331;
continue;
} else {
var temp__5735__auto___42332 = cljs.core.seq.call(null,seq__42319_42323);
if(temp__5735__auto___42332){
var seq__42319_42333__$1 = temp__5735__auto___42332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42319_42333__$1)){
var c__4556__auto___42334 = cljs.core.chunk_first.call(null,seq__42319_42333__$1);
var G__42335 = cljs.core.chunk_rest.call(null,seq__42319_42333__$1);
var G__42336 = c__4556__auto___42334;
var G__42337 = cljs.core.count.call(null,c__4556__auto___42334);
var G__42338 = (0);
seq__42319_42323 = G__42335;
chunk__42320_42324 = G__42336;
count__42321_42325 = G__42337;
i__42322_42326 = G__42338;
continue;
} else {
var line_42339 = cljs.core.first.call(null,seq__42319_42333__$1);
markdown.links.parse_reference_link.call(null,line_42339,references);


var G__42340 = cljs.core.next.call(null,seq__42319_42333__$1);
var G__42341 = null;
var G__42342 = (0);
var G__42343 = (0);
seq__42319_42323 = G__42340;
chunk__42320_42324 = G__42341;
count__42321_42325 = G__42342;
i__42322_42326 = G__42343;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__42344_42348 = cljs.core.seq.call(null,lines);
var chunk__42345_42349 = null;
var count__42346_42350 = (0);
var i__42347_42351 = (0);
while(true){
if((i__42347_42351 < count__42346_42350)){
var line_42352 = cljs.core._nth.call(null,chunk__42345_42349,i__42347_42351);
markdown.links.parse_footnote_link.call(null,line_42352,footnotes);


var G__42353 = seq__42344_42348;
var G__42354 = chunk__42345_42349;
var G__42355 = count__42346_42350;
var G__42356 = (i__42347_42351 + (1));
seq__42344_42348 = G__42353;
chunk__42345_42349 = G__42354;
count__42346_42350 = G__42355;
i__42347_42351 = G__42356;
continue;
} else {
var temp__5735__auto___42357 = cljs.core.seq.call(null,seq__42344_42348);
if(temp__5735__auto___42357){
var seq__42344_42358__$1 = temp__5735__auto___42357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42344_42358__$1)){
var c__4556__auto___42359 = cljs.core.chunk_first.call(null,seq__42344_42358__$1);
var G__42360 = cljs.core.chunk_rest.call(null,seq__42344_42358__$1);
var G__42361 = c__4556__auto___42359;
var G__42362 = cljs.core.count.call(null,c__4556__auto___42359);
var G__42363 = (0);
seq__42344_42348 = G__42360;
chunk__42345_42349 = G__42361;
count__42346_42350 = G__42362;
i__42347_42351 = G__42363;
continue;
} else {
var line_42364 = cljs.core.first.call(null,seq__42344_42358__$1);
markdown.links.parse_footnote_link.call(null,line_42364,footnotes);


var G__42365 = cljs.core.next.call(null,seq__42344_42358__$1);
var G__42366 = null;
var G__42367 = (0);
var G__42368 = (0);
seq__42344_42348 = G__42365;
chunk__42345_42349 = G__42366;
count__42346_42350 = G__42367;
i__42347_42351 = G__42368;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__42370 = cljs.core.split_with.call(null,(function (p1__42369_SHARP_){
return cljs.core.not_empty.call(null,p1__42369_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__42370,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__42370,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__42373 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__42374 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__42375 = (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});
var _STAR_formatter_STAR__temp_val__42376 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__42375);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__42376);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__42377 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__42377,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__42377,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__42383_42393 = lines__$1;
var vec__42384_42394 = G__42383_42393;
var seq__42385_42395 = cljs.core.seq.call(null,vec__42384_42394);
var first__42386_42396 = cljs.core.first.call(null,seq__42385_42395);
var seq__42385_42397__$1 = cljs.core.next.call(null,seq__42385_42395);
var line_42398 = first__42386_42396;
var more_42399 = seq__42385_42397__$1;
var state_42400 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__42383_42401__$1 = G__42383_42393;
var state_42402__$1 = state_42400;
while(true){
var vec__42390_42403 = G__42383_42401__$1;
var seq__42391_42404 = cljs.core.seq.call(null,vec__42390_42403);
var first__42392_42405 = cljs.core.first.call(null,seq__42391_42404);
var seq__42391_42406__$1 = cljs.core.next.call(null,seq__42391_42404);
var line_42407__$1 = first__42392_42405;
var more_42408__$1 = seq__42391_42406__$1;
var state_42409__$2 = state_42402__$1;
var line_42410__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_42409__$2))?"":line_42407__$1);
var state_42411__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_42409__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_42409__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_42409__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_42409__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_42409__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_42408__$1))){
var G__42412 = more_42408__$1;
var G__42413 = cljs.core.assoc.call(null,transformer.call(null,html,line_42410__$2,cljs.core.first.call(null,more_42408__$1),cljs.core.dissoc.call(null,state_42411__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_42410__$2.trim()));
G__42383_42401__$1 = G__42412;
state_42402__$1 = G__42413;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_42411__$3))),line_42410__$2,"",cljs.core.assoc.call(null,state_42411__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__42374);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__42373);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42416 = arguments.length;
var i__4737__auto___42417 = (0);
while(true){
if((i__4737__auto___42417 < len__4736__auto___42416)){
args__4742__auto__.push((arguments[i__4737__auto___42417]));

var G__42418 = (i__4737__auto___42417 + (1));
i__4737__auto___42417 = G__42418;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq42414){
var G__42415 = cljs.core.first.call(null,seq42414);
var seq42414__$1 = cljs.core.next.call(null,seq42414);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42415,seq42414__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42421 = arguments.length;
var i__4737__auto___42422 = (0);
while(true){
if((i__4737__auto___42422 < len__4736__auto___42421)){
args__4742__auto__.push((arguments[i__4737__auto___42422]));

var G__42423 = (i__4737__auto___42422 + (1));
i__4737__auto___42422 = G__42423;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq42419){
var G__42420 = cljs.core.first.call(null,seq42419);
var seq42419__$1 = cljs.core.next.call(null,seq42419);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42420,seq42419__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42425 = arguments.length;
var i__4737__auto___42426 = (0);
while(true){
if((i__4737__auto___42426 < len__4736__auto___42425)){
args__4742__auto__.push((arguments[i__4737__auto___42426]));

var G__42427 = (i__4737__auto___42426 + (1));
i__4737__auto___42426 = G__42427;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq42424){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42424));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42429 = arguments.length;
var i__4737__auto___42430 = (0);
while(true){
if((i__4737__auto___42430 < len__4736__auto___42429)){
args__4742__auto__.push((arguments[i__4737__auto___42430]));

var G__42431 = (i__4737__auto___42430 + (1));
i__4737__auto___42430 = G__42431;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq42428){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42428));
}));


//# sourceMappingURL=core.js.map?rel=1606929279156
