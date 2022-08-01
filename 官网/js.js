$().ready(function(){
var mid_pic=document.getElementsByClassName("rollpic");
var mid_choice=document.getElementsByClassName("mi_choice");

mid_choice[0].style.backgroundImage="url('image/michoicebg.png')";
var num1=1;
 var inter2= setInterval(
     function inter(){
        
    $(".mi_choice").css({"backgroundImage":"url()"});
    console.log($("#p2").position().left);
    var judge=0;
    var num2

    for(var i=0;i<5;i++){
        mid_pic[i].style.opacity="1";
        mid_pic[i].style.left=mid_pic[i].offsetLeft-650+"px";
        if(mid_pic[i].offsetLeft<=-650){
            mid_pic[i].style.left="1950px";
            mid_pic[i].style.opacity="0";
        }
    }
    mid_choice[num1].style.backgroundImage="url('image/michoicebg.png')";
    if(num1==4)num1=0;
    else num1=num1+1;

    $(".mi_choice").click(function(){
        judge=1
        num2=$(this).index();
    
 })
//  $(".mi_choice").click(function(){
//     clearInterval(inter2);
//     var num3=$(this).index();
//     $(".mi_choice").css({"backgroundImage":"url()"});
//     $(".mi_choice").eq(num3).css({"backgroundImage":"url('image/michoicebg.png')"});
//     $(".rollpic").eq(num3).animate({"left":"0px"},300);
//     num1=num3;
//     for(var i=0;i<5;i++){
//         mid_pic[i].style.left=(i-num3)*650+"px";
//         mid_pic[i].style.transition="left 0.1s"
//     }
//     inter2=setInterval(inter,1500);

// })

},1500)



var nsc=document.getElementsByClassName("newchoice");
var rs=document.getElementsByClassName("news");
nsc[0].style.backgroundColor="rgb(255, 255, 255)";
nsc[0].style.color="rgb(166, 66, 66)";
nsc[0].style.fontWeight="bolder";
nsc[0].style.borderBottom="2px solid rgb(166, 66, 66)"; 
$(".newchoice").click(function(){
var c1=$(this).index();
$(".newchoice").css({"backgroundColor":"rgb(228, 229, 233)","color":"black","fontWeight":"normal","borderBottom":"2px solid rgb(255, 255, 255)"})
$(this).css({"backgroundColor":"rgb(255, 255, 255)","color":"rgb(166, 66, 66)","fontWeight":"bolder","borderBottom":"2px solid rgb(166, 66, 66)"})
rs[c1].style.left="0px";
for(var i=0;i<4;i++){
    rs[i].style.left=(i-c1)*400+"px";
}
})


var cr=document.getElementsByClassName("coorroll");
setInterval(function(){
    $(".coorroll").css({"opacity":"1","transition":"all 0.5s"});
    
    for(var i=0;i<3;i++){
        cr[i].style.opacity="1";
        cr[i].style.top=cr[i].offsetTop-130+"px";
        if(cr[i].offsetTop<0){
            cr[i].style.transition="all 0s";
           $(".coorroll").eq(i).animate({"top":"150px"},0);
        }
    }
  
    
},2000)

$(".tpli").eq(0).css({"backgroundImage":"url('image/rechoicebg.png')","color":"white"});
$(".bpli").eq(0).css({"backgroundImage":"url('image/rechoicebg.png')","color":"white"});
$(".tpli").click(function(){
$(".tpli").css({"backgroundImage":"url()","color":"#bfa885"});
var t1=$(this).index();
switch(t1){
    case 0:$(".tpli").eq(0).css({"backgroundImage":"url('image/rechoicebg.png')","color":"white"});
           document.getElementById("comment1").innerHTML="CPU: intel(R) Core(TM) i3<br>"+
           "内 存：4G<br>"+
          "显 卡：GeForce GT 610<br>"+
         "分辨率：1280*720<br>"+
         "系 统：《剑网3》重制版基于DX11开发，不支持XP系统，建议使用win7、win8、win10 64位系统";
         break;

    case 1:$(".tpli").eq(1).css({"backgroundImage":"url('image/rechoicebg.png')","color":"white"});

            document.getElementById("comment1").innerHTML="CPU: intel(R) Core(TM) i5<br>"+
           "内 存：8G<br>"+
          "显 卡：GeForce GT 1050<br>"+
         "分辨率：1960*1080<br>"+
         "系 统：《剑网3》重制版基于DX11开发，不支持XP系统，建议使用win7、win8、win10 64位系统";
         break;
    case 2: $(".tpli").eq(2).css({"backgroundImage":"url('image/rechoicebg.png')","color":"white"});

            document.getElementById("comment1").innerHTML="CPU: intel(R) Core(TM) i7<br>"+
            "内 存：8G<br>"+
           "显 卡：GeForce GT 1060<br>"+
          "分辨率：1960*1080<br>"+
          "系 统：《剑网3》重制版基于DX11开发，不支持XP系统，建议使用win7、win8、win10 64位系统";
          break;
    case 3: $(".tpli").eq(3).css({"backgroundImage":"url('image/rechoicebg.png')","color":"white"});

          document.getElementById("comment1").innerHTML="CPU: intel(R) Core(TM) i7<br>"+
          "内 存：16G<br>"+
         "显 卡：GeForce GT 1080TI<br>"+
        "分辨率：1960*1080<br>"+
        "系 统：《剑网3》重制版基于DX11开发，不支持XP系统，建议使用win7、win8、win10 64位系统"
        break;
}
})
$(".bpli").click(function(){
    $(".bpli").css({"backgroundImage":"url()","color":"#bfa885"});
    var b1=$(this).index();
    switch(b1){
        case 0:$(".bpli").eq(0).css({"backgroundImage":"url('image/rechoicebg.png')","color":"white"});
               document.getElementById("comment2").innerHTML="CPU: intel(R) Core(TM) i5<br>"+
               "内 存：4G<br>"+
              "显 卡：GeForce GT 740M<br>"+
             "分辨率：1366*768<br>"+
             "系 统：《剑网3》重制版基于DX11开发，不支持XP系统，建议使用win7、win8、win10 64位系统"
             break;
    
        case 1:$(".bpli").eq(1).css({"backgroundImage":"url('image/rechoicebg.png')","color":"white"});
    
                document.getElementById("comment2").innerHTML="CPU: intel(R) Core(TM) i5<br>"+
               "内 存：8G<br>"+
              "显 卡：GeForce GT 1050<br>"+
             "分辨率：1960*1080<br>"+
             "系 统：《剑网3》重制版基于DX11开发，不支持XP系统，建议使用win7、win8、win10 64位系统";
             break;
        case 2: $(".bpli").eq(2).css({"backgroundImage":"url('image/rechoicebg.png')","color":"white"});
    
                document.getElementById("comment2").innerHTML="CPU: intel(R) Core(TM) i7<br>"+
                "内 存：8G<br>"+
               "显 卡：GeForce GT 1060<br>"+
              "分辨率：1960*1080<br>"+
              "系 统：《剑网3》重制版基于DX11开发，不支持XP系统，建议使用win7、win8、win10 64位系统";
              break;
        case 3: $(".bpli").eq(3).css({"backgroundImage":"url('image/rechoicebg.png')","color":"white"});
    
              document.getElementById("comment2").innerHTML="CPU: intel(R) Core(TM) i7<br>"+
              "内 存：16G<br>"+
             "显 卡：GeForce GT 1070<br>"+
            "分辨率：1960*1080<br>"+
            "系 统：《剑网3》重制版基于DX11开发，不支持XP系统，建议使用win7、win8、win10 64位系统"
            break;
    }

})

})