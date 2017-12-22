// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards02.core');
goog.require('cljs.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devcards02.core","devcards02.core",1504536860),new cljs.core.Keyword(null,"first-card","first-card",884452895)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"first-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),React.createElement("div",null,React.createElement("h1",null,"This is your first devcard!")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devcards02.core","devcards02.core",1504536860),new cljs.core.Keyword(null,"nav-menu","nav-menu",-1710804493)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"nav-menu",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),React.createElement("div",({"style": ({"backgroundColor": "#3c5b7f", "height": "30px", "padding": "20px", "fontSize": "150%"})}),React.createElement("a",({"href": "www.google.com", "style": ({"color": "white"})}),"joshuastupplebeen.io"),React.createElement("a",({"href": "www.google.com", "style": ({"paddingLeft": "40px", "color": "white"})}),"Weblog"),React.createElement("a",({"href": "www.google.com", "style": ({"paddingLeft": "40px", "color": "white"})}),"Portfolio"),React.createElement("a",({"href": "www.google.com", "style": ({"paddingLeft": "40px", "color": "white"})}),"Contact")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards02.core.test_text = "round round. Beef ribs kielbasa biltong, drumstick picanha ball tip landjaeger beef filet mignon fatback cow bresaola ham bacon meatball. Kielbasa drumstick tenderloin tail, swine buffalo porchetta. Ground round turducken boudin pancetta. Andouille meatloaf pork belly venison, corned beef chuck drumstick alcatra spare ribs.\n\nRibeye pork loin frankfurter sausage turducken hamburger. Pancetta strip steak venison, buffalo swine kevin tail fatback sausage ground round t-bone andouille short ribs pig. Cow corned beef beef kielbasa, pork loin turducken biltong meatball bacon cupim chicken. Bacon bresaola frankfurter, shank ham meatball leberkas strip steak brisket ball tip porchetta. Strip steak tenderloin sirloin flank. Pig jowl doner swine, alcatra pancetta turducken salami pork chop filet mignon sirloin.\n\nKevin shank chicken landjaeger chuck capicola shoulder ham hock t-bone cow beef ribs. Hamburger spare ribs swine pork loin ribeye sausage tenderloin. Cupim turkey hamburger beef tenderloin meatball ribeye chuck kielbasa strip steak fatback. T-bone prosciutto tri-tip, sausage ham hock shoulder drumstick leberkas pork loin hamburger short ribs cupim ground round rump corned beef. Tri-tip tongue drumstick kielbasa boudin ball tip porchetta salami bresaola ham ham hock meatball.";
devcards02.core.avatar = (function devcards02$core$avatar(var_args){
var args28211 = [];
var len__25909__auto___28214 = arguments.length;
var i__25910__auto___28215 = (0);
while(true){
if((i__25910__auto___28215 < len__25909__auto___28214)){
args28211.push((arguments[i__25910__auto___28215]));

var G__28216 = (i__25910__auto___28215 + (1));
i__25910__auto___28215 = G__28216;
continue;
} else {
}
break;
}

var G__28213 = args28211.length;
switch (G__28213) {
case 0:
return devcards02.core.avatar.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards02.core.avatar.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28211.length)].join('')));

}
});

devcards02.core.avatar.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards02.core.avatar.call(null,"https://lh6.googleusercontent.com/8t7ktX-9bc1r0busavZkly1cWbJ7szHZ0b2o4xborGsgfTziA11Ru0GyOBqINOtq8Z6Pcoc5ro7zPvM=w1043-h1320");
});

devcards02.core.avatar.cljs$core$IFn$_invoke$arity$1 = (function (img_url){
return React.createElement("img",({"src": img_url, "style": ({"borderRadius": "50%", "padding": "10px", "paddingLeft": "30px", "position": "relative"}), "width": "100px", "height": "100px"}));
});

devcards02.core.avatar.cljs$lang$maxFixedArity = 1;

devcards02.core.post_preview = (function devcards02$core$post_preview(preview_content){
return React.createElement("div",({"style": ({"border": "1px solid", "borderColor": "rgb(239, 237, 237)", "paddingTop": "0px"})}),React.createElement("h3",({"style": ({"backgroundColor": "rgb(239, 237, 237)", "padding": "10px", "paddingLeft": "20px", "marginTop": "0px"})}),"Header"),React.createElement("div",({"style": ({"display": "flex"})}),sablono.interpreter.interpret.call(null,devcards02.core.avatar.call(null)),React.createElement("div",({"style": ({"display": "flex", "flexDirection": "column"})}),React.createElement("text-preview",({"style": ({"padding": "30px"})}),sablono.interpreter.interpret.call(null,preview_content)),React.createElement("a",({"href": "#", "style": ({"padding": "30px"})}),"More..."))));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devcards02.core","devcards02.core",1504536860),new cljs.core.Keyword(null,"post-preview","post-preview",-2055657109)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"post-preview",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards02.core.post_preview.call(null,devcards02.core.test_text),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
devcards02.core.main = (function devcards02$core$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return ReactDOM.render(React.createElement("div",null,"This is working"),node);
} else {
return null;
}
});
devcards02.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1513977207196