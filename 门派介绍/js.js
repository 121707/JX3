$().ready(function(){
var src1=["image/ytbg.jpg","image/lxbg.jpg","image/plbg.jpg","image/bdbg.jpg","image/cgbg.jpg","image/cybg.jpg","image/gbbg.jpg",
"image/bgmj.jpg","image/bgtm.jpg"];    
$(".human").eq(0).animate({"top":"0px"},500);
$(".history").eq(0).animate({"left":"170px"},500)
$(".fightmode").eq(0).css({"opacity":"1"});
 $(".icon1").eq(0).css({"opacity":"1"});
 $(".icon1 img").eq(0).css({"transform":"rotate(0deg)"});
 

$(".icon1").click(function(){
    $(".human").animate({"top":"-860px"},0);
    $(".history").animate({"left":"-417px"},0)
    $(".fightmode").css({"opacity":"0"});
     $(".icon1").css({"opacity":"0"});
     $(".icon1 img").css({"transform":"rotate(360deg)"});
var eq=$(this).index();

$(".human").eq(eq).animate({"top":"0px"},500);
$(".history").eq(eq).animate({"left":"170px"},500)
$(".fightmode").eq(eq).css({"opacity":"1"});
 $(".icon1").eq(eq).css({"opacity":"1"});
 $(".icon1 img").eq(eq).css({"transform":"rotate(0deg)"});
 $(".introbox").css({"backgroundImage":"url("+src1[eq]+")"});

})
})