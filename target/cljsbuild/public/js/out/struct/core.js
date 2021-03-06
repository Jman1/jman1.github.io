// Compiled by ClojureScript 1.10.773 {}
goog.provide('struct.core');
goog.require('cljs.core');
goog.require('cuerdas.core');
struct.core.map_SINGLEQUOTE_ = cljs.core.map;
struct.core.apply_validation = (function struct$core$apply_validation(step,data,value){
var temp__5733__auto__ = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$2(step,null);
if(cljs.core.truth_(temp__5733__auto__)){
var validate = temp__5733__auto__;
var args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$2(step,cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(step))){
return cljs.core.apply.call(null,validate,data,value,args);
} else {
return cljs.core.apply.call(null,validate,value,args);
}
} else {
return true;
}
});
struct.core.dissoc_in = (function struct$core$dissoc_in(m,p__44629){
var vec__44630 = p__44629;
var seq__44631 = cljs.core.seq.call(null,vec__44630);
var first__44632 = cljs.core.first.call(null,seq__44631);
var seq__44631__$1 = cljs.core.next.call(null,seq__44631);
var k = first__44632;
var ks = seq__44631__$1;
var keys = vec__44630;
if(ks){
var temp__5733__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var nextmap = temp__5733__auto__;
var newmap = struct.core.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
struct.core.prepare_message = (function struct$core$prepare_message(opts,step){
if(cljs.core.truth_(new cljs.core.Keyword("struct.core","nomsg","struct.core/nomsg",-1388411487).cljs$core$IFn$_invoke$arity$1(opts))){
return new cljs.core.Keyword("struct.core","nomsg","struct.core/nomsg",-1388411487);
} else {
var msg = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$2(step,"errors.invalid");
var tr = new cljs.core.Keyword(null,"translate","translate",1336199447).cljs$core$IFn$_invoke$arity$2(opts,cljs.core.identity);
return cljs.core.apply.call(null,cuerdas.core.format,tr.call(null,msg),cljs.core.vec.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(step)));
}
});
struct.core.opts_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null), null);
struct.core.notopts_QMARK_ = cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),null,new cljs.core.Keyword(null,"coerce","coerce",1917884504),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null), null));
struct.core.build_step = (function struct$core$build_step(key,item){
var coerce_key = (function struct$core$build_step_$_coerce_key(key__$1){
if(cljs.core.vector_QMARK_.call(null,key__$1)){
return key__$1;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null);
}
});
if(cljs.core.vector_QMARK_.call(null,item)){
var validator = cljs.core.first.call(null,item);
var result = cljs.core.split_with.call(null,struct.core.notopts_QMARK_,cljs.core.rest.call(null,item));
var args = cljs.core.first.call(null,result);
var opts = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.second.call(null,result));
return cljs.core.merge.call(null,cljs.core.assoc.call(null,validator,new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"path","path",-188191168),coerce_key.call(null,key)),cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coerce","coerce",1917884504),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"optional","optional",2053951509)], null)));
} else {
return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path","path",-188191168),coerce_key.call(null,key));
}
});
struct.core.normalize_step_map_entry = (function struct$core$normalize_step_map_entry(acc,key,value){
if(cljs.core.vector_QMARK_.call(null,value)){
return cljs.core.reduce.call(null,(function (p1__44633_SHARP_,p2__44634_SHARP_){
return cljs.core.conj_BANG_.call(null,p1__44633_SHARP_,struct.core.build_step.call(null,key,p2__44634_SHARP_));
}),acc,value);
} else {
return cljs.core.conj_BANG_.call(null,acc,struct.core.build_step.call(null,key,value));
}
});
struct.core.normalize_step_entry = (function struct$core$normalize_step_entry(acc,p__44637){
var vec__44638 = p__44637;
var seq__44639 = cljs.core.seq.call(null,vec__44638);
var first__44640 = cljs.core.first.call(null,seq__44639);
var seq__44639__$1 = cljs.core.next.call(null,seq__44639);
var key = first__44640;
var values = seq__44639__$1;
return cljs.core.reduce.call(null,(function (p1__44635_SHARP_,p2__44636_SHARP_){
return cljs.core.conj_BANG_.call(null,p1__44635_SHARP_,struct.core.build_step.call(null,key,p2__44636_SHARP_));
}),acc,values);
});
struct.core.build_steps = (function struct$core$build_steps(schema){
if(cljs.core.vector_QMARK_.call(null,schema)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,struct.core.normalize_step_entry,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),schema));
} else {
if(cljs.core.map_QMARK_.call(null,schema)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,struct.core.normalize_step_map_entry,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),schema));
} else {
throw cljs.core.ex_info.call(null,"Invalid schema.",cljs.core.PersistentArrayMap.EMPTY);

}
}
});
struct.core.strip_values = (function struct$core$strip_values(data,steps){
return cljs.core.reduce.call(null,(function (acc,path){
var value = cljs.core.get_in.call(null,data,path,new cljs.core.Keyword("struct.core","notexists","struct.core/notexists",831189477));
if(cljs.core.not_EQ_.call(null,value,new cljs.core.Keyword("struct.core","notexists","struct.core/notexists",831189477))){
return cljs.core.assoc_in.call(null,acc,path,value);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,struct.core.map_SINGLEQUOTE_.call(null,new cljs.core.Keyword(null,"path","path",-188191168),steps)));
});
struct.core.validate_internal = (function struct$core$validate_internal(data,steps,opts){
var skip = cljs.core.PersistentHashSet.EMPTY;
var errors = null;
var data__$1 = data;
var steps__$1 = steps;
while(true){
var temp__5733__auto__ = cljs.core.first.call(null,steps__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var step = temp__5733__auto__;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(step);
var value = cljs.core.get_in.call(null,data__$1,path);
if(cljs.core.contains_QMARK_.call(null,skip,path)){
var G__44641 = skip;
var G__44642 = errors;
var G__44643 = data__$1;
var G__44644 = cljs.core.rest.call(null,steps__$1);
skip = G__44641;
errors = G__44642;
data__$1 = G__44643;
steps__$1 = G__44644;
continue;
} else {
if(cljs.core.truth_((((value == null))?new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(step):false))){
var G__44645 = skip;
var G__44646 = errors;
var G__44647 = data__$1;
var G__44648 = cljs.core.rest.call(null,steps__$1);
skip = G__44645;
errors = G__44646;
data__$1 = G__44647;
steps__$1 = G__44648;
continue;
} else {
if(cljs.core.truth_(struct.core.apply_validation.call(null,step,data__$1,value))){
var value__$1 = new cljs.core.Keyword(null,"coerce","coerce",1917884504).cljs$core$IFn$_invoke$arity$2(step,cljs.core.identity).call(null,value);
var G__44649 = skip;
var G__44650 = errors;
var G__44651 = cljs.core.assoc_in.call(null,data__$1,path,value__$1);
var G__44652 = cljs.core.rest.call(null,steps__$1);
skip = G__44649;
errors = G__44650;
data__$1 = G__44651;
steps__$1 = G__44652;
continue;
} else {
var message = struct.core.prepare_message.call(null,opts,step);
var G__44653 = cljs.core.conj.call(null,skip,path);
var G__44654 = cljs.core.assoc_in.call(null,errors,path,message);
var G__44655 = struct.core.dissoc_in.call(null,data__$1,path);
var G__44656 = cljs.core.rest.call(null,steps__$1);
skip = G__44653;
errors = G__44654;
data__$1 = G__44655;
steps__$1 = G__44656;
continue;

}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [errors,data__$1], null);
}
break;
}
});
/**
 * Validate data with specified schema.
 * 
 *   This function by default strips all data that are not defined in
 *   schema, but this behavior can be changed by passing `{:strip false}`
 *   as third argument.
 */
struct.core.validate = (function struct$core$validate(var_args){
var G__44658 = arguments.length;
switch (G__44658) {
case 2:
return struct.core.validate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return struct.core.validate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(struct.core.validate.cljs$core$IFn$_invoke$arity$2 = (function (data,schema){
return struct.core.validate.call(null,data,schema,null);
}));

(struct.core.validate.cljs$core$IFn$_invoke$arity$3 = (function (data,schema,p__44659){
var map__44660 = p__44659;
var map__44660__$1 = (((((!((map__44660 == null))))?(((((map__44660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44660):map__44660);
var opts = map__44660__$1;
var strip = cljs.core.get.call(null,map__44660__$1,new cljs.core.Keyword(null,"strip","strip",632627960),false);
var steps = struct.core.build_steps.call(null,schema);
var data__$1 = (cljs.core.truth_(strip)?struct.core.strip_values.call(null,data,steps):data);
return struct.core.validate_internal.call(null,data__$1,steps,opts);
}));

(struct.core.validate.cljs$lang$maxFixedArity = 3);

/**
 * A helper that used just for validate one value.
 */
struct.core.validate_single = (function struct$core$validate_single(var_args){
var G__44664 = arguments.length;
switch (G__44664) {
case 2:
return struct.core.validate_single.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return struct.core.validate_single.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(struct.core.validate_single.cljs$core$IFn$_invoke$arity$2 = (function (data,schema){
return struct.core.validate_single.call(null,data,schema,null);
}));

(struct.core.validate_single.cljs$core$IFn$_invoke$arity$3 = (function (data,schema,opts){
var data__$1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),data], null);
var steps = struct.core.build_steps.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"field","field",-1302436500),schema], null));
return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"field","field",-1302436500),struct.core.validate_internal.call(null,data__$1,steps,opts));
}));

(struct.core.validate_single.cljs$lang$maxFixedArity = 3);

/**
 * Analogous function to the `validate` that instead of return
 *   the errors, just raise a ex-info exception with errors in case
 *   them are or just return the validated data.
 * 
 *   This function accepts the same parameters as `validate` with
 *   an additional `:message` that serves for customize the exception
 *   message.
 */
struct.core.validate_BANG_ = (function struct$core$validate_BANG_(var_args){
var G__44667 = arguments.length;
switch (G__44667) {
case 2:
return struct.core.validate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return struct.core.validate_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(struct.core.validate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (data,schema){
return struct.core.validate_BANG_.call(null,data,schema,null);
}));

(struct.core.validate_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (data,schema,p__44668){
var map__44669 = p__44668;
var map__44669__$1 = (((((!((map__44669 == null))))?(((((map__44669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44669):map__44669);
var opts = map__44669__$1;
var message = cljs.core.get.call(null,map__44669__$1,new cljs.core.Keyword(null,"message","message",-406056002),"Schema validation error");
var vec__44671 = struct.core.validate.call(null,data,schema,opts);
var errors = cljs.core.nth.call(null,vec__44671,(0),null);
var data__$1 = cljs.core.nth.call(null,vec__44671,(1),null);
if(cljs.core.seq.call(null,errors)){
throw cljs.core.ex_info.call(null,message,errors);
} else {
return data__$1;
}
}));

(struct.core.validate_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Return true if the data matches the schema, otherwise
 *   return false.
 */
struct.core.valid_QMARK_ = (function struct$core$valid_QMARK_(data,schema){
return (cljs.core.first.call(null,struct.core.validate.call(null,data,schema,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("struct.core","nomsg","struct.core/nomsg",-1388411487),true], null))) == null);
});
/**
 * Analogous function to `valid?` that just validates single value.
 */
struct.core.valid_single_QMARK_ = (function struct$core$valid_single_QMARK_(data,schema){
return (cljs.core.first.call(null,struct.core.validate_single.call(null,data,schema,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("struct.core","nomsg","struct.core/nomsg",-1388411487),true], null))) == null);
});
struct.core.keyword = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),"must be a keyword",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),cljs.core.keyword_QMARK_,new cljs.core.Keyword(null,"coerce","coerce",1917884504),cljs.core.identity], null);
struct.core.uuid = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"must be an uuid",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__44676_SHARP_){
return (p1__44676_SHARP_ instanceof cljs.core.UUID);
})], null);
struct.core._PLUS_uuid_re_PLUS_ = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
struct.core.uuid_str = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),"must be an uuid",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__44677_SHARP_){
if(typeof p1__44677_SHARP_ === 'string'){
return cljs.core.re_seq.call(null,/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,p1__44677_SHARP_);
} else {
return false;
}
}),new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function (p1__44679_SHARP_){
return struct.core.uuid.call(null,p1__44679_SHARP_);
})], null);
struct.core.email = (function (){var rx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"must be a valid email",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__44680_SHARP_){
if(typeof p1__44680_SHARP_ === 'string'){
return cljs.core.re_seq.call(null,rx,p1__44680_SHARP_);
} else {
return false;
}
})], null);
})();
struct.core.required = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"this field is mandatory",new cljs.core.Keyword(null,"optional","optional",2053951509),false,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__44681_SHARP_){
if(typeof p1__44681_SHARP_ === 'string'){
return (!(cljs.core.empty_QMARK_.call(null,p1__44681_SHARP_)));
} else {
return (!((p1__44681_SHARP_ == null)));
}
})], null);
struct.core.number = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"must be a number",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),cljs.core.number_QMARK_], null);
struct.core.number_str = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),"must be a number",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__44682_SHARP_){
var or__4126__auto__ = typeof p1__44682_SHARP_ === 'number';
if(or__4126__auto__){
return or__4126__auto__;
} else {
if(typeof p1__44682_SHARP_ === 'string'){
return cuerdas.core.numeric_QMARK_.call(null,p1__44682_SHARP_);
} else {
return false;
}
}
}),new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function (p1__44683_SHARP_){
if(typeof p1__44683_SHARP_ === 'number'){
return p1__44683_SHARP_;
} else {
return cuerdas.core.parse_number.call(null,p1__44683_SHARP_);
}
})], null);
struct.core.integer = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"must be a integer",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__44684_SHARP_){
return Number.isInteger(p1__44684_SHARP_);
})], null);
struct.core.integer_str = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),"must be a long",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__44686_SHARP_){
var or__4126__auto__ = typeof p1__44686_SHARP_ === 'number';
if(or__4126__auto__){
return or__4126__auto__;
} else {
if(typeof p1__44686_SHARP_ === 'string'){
return cuerdas.core.numeric_QMARK_.call(null,p1__44686_SHARP_);
} else {
return false;
}
}
}),new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function (p1__44687_SHARP_){
if(typeof p1__44687_SHARP_ === 'number'){
return (p1__44687_SHARP_ | (0));
} else {
return cuerdas.core.parse_int.call(null,p1__44687_SHARP_);
}
})], null);
struct.core.boolean$ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"must be a boolean",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__44688_SHARP_){
return ((cljs.core._EQ_.call(null,false,p1__44688_SHARP_)) || (cljs.core._EQ_.call(null,true,p1__44688_SHARP_)));
})], null);
struct.core.boolean_str = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),"must be a boolean",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__44689_SHARP_){
if(typeof p1__44689_SHARP_ === 'string'){
return cljs.core.re_seq.call(null,/^(?:t|true|false|f|0|1)$/,p1__44689_SHARP_);
} else {
return false;
}
}),new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function (p1__44690_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["true",null,"t",null,"1",null], null), null),p1__44690_SHARP_);
})], null);
struct.core.string = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"must be a string",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),cljs.core.string_QMARK_], null);
struct.core.string_like = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"must be a string",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"coerce","coerce",1917884504),cljs.core.str], null);
struct.core.in_range = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"not in range %s and %s",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__44691_SHARP_,p2__44692_SHARP_,p3__44693_SHARP_){
return ((typeof p1__44691_SHARP_ === 'number') && (typeof p2__44692_SHARP_ === 'number') && (typeof p3__44693_SHARP_ === 'number') && ((((p2__44692_SHARP_ <= p1__44691_SHARP_)) && ((p1__44691_SHARP_ <= p3__44693_SHARP_)))));
})], null);
struct.core.positive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"must be positive",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),cljs.core.pos_QMARK_], null);
struct.core.negative = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"must be negative",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),cljs.core.neg_QMARK_], null);
struct.core.map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"must be a map",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),cljs.core.map_QMARK_], null);
struct.core.set = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"must be a set",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),cljs.core.set_QMARK_], null);
struct.core.coll = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"must be a collection",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),cljs.core.coll_QMARK_], null);
struct.core.vector = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"must be a vector instance",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),cljs.core.vector_QMARK_], null);
struct.core.every = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"must match the predicate",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__44695_SHARP_,p2__44694_SHARP_){
return cljs.core.every_QMARK_.call(null,p2__44694_SHARP_,p1__44695_SHARP_);
})], null);
struct.core.member = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"not in coll",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__44696_SHARP_,p2__44697_SHARP_){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([p1__44696_SHARP_]),p2__44697_SHARP_);
})], null);
struct.core.function$ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"must be a function",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),cljs.core.ifn_QMARK_], null);
struct.core.identical_to = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),"does not match",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"state","state",-1988618099),true,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (state,v,ref){
var prev = cljs.core.get.call(null,state,ref);
return cljs.core._EQ_.call(null,prev,v);
})], null);
struct.core.min_count = (function (){var validate = (function struct$core$validate(v,minimum){
if(typeof minimum === 'number'){
} else {
throw (new Error("Assert failed: (number? minimum)"));
}

return (cljs.core.count.call(null,v) >= minimum);
});
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"less than the minimum %s",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),validate], null);
})();
struct.core.max_count = (function (){var validate = (function struct$core$validate(v,maximum){
if(typeof maximum === 'number'){
} else {
throw (new Error("Assert failed: (number? maximum)"));
}

return (cljs.core.count.call(null,v) <= maximum);
});
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"longer than the maximum %s",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),validate], null);
})();

//# sourceMappingURL=core.js.map?rel=1606929282381
