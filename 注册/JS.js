/** 快速注册 */
var np1="numphone1";
var np2="numphone2";
function phonetest(np){
var np=document.getElementById(np);
var a=0;
np.onclick=function(){
    if(a==0 || np.value=="手机号码不可为空"){
    np.value="";
    a=1;
    }
}
np.onblur=function(){
    if(np.value==""){
        np.style.border="1px solid red";
        np. placeholder="手机号码不可为空"
    }
    else np.style.border="1px solid rgb(128, 142, 155)";
}
}
np1.onclick=phonetest(np1);
np2.onclick=phonetest(np2);
/**验证码判定 */
var tp1="textp1";
var tp2="textp2";
function textptest(tp){
var tp=document.getElementById(tp);
var b=0;
tp.onclick=function(){
    if(b==0 || tp.value=="验证码不可为空"){
    tp.value="";
    b=1;
    }
}
tp.onblur=function(){
    if(tp.value==""){
        tp.style.border="1px solid red";
        tp.placeholder="验证码不可为空"
    }
    else tp.style.border="1px solid rgb(128, 142, 155)";
}
}
tp1.onclick=textptest(tp1);
tp2.onclick=textptest(tp2);
/**密码判定 */
var pd1="password1";
var pd2="password2";
function passtest(pd){
var pd=document.getElementById(pd);
var c=0;
pd.onclick=function(){
    if(c==0 || pd.value=="密码不可为空,密码(8-32位字母/数字/符号组合)"){
    pd.value="";
    c=1;
    }
}
pd.onblur=function(){
    if(pd.value==""){
        pd.style.border="1px solid red";
        pd.placeholder="密码不可为空,密码(8-32位字母/数字/符号组合)"
    }
    else pd.style.border="1px solid rgb(128, 142, 155)";
}
}
pd1.onclick=passtest(pd1);
pd2.onclick=passtest(pd2);
/*以下开始是自定义注册*/
/**数据完整判断 */

function jungle1(){
   
    var array= document.getElementsByTagName("input");
    for(var i=0;i<6;i++){
        if(array[i].value==""){
            alert("请填入完整的信息");
            return false;    
        }
              
    }
    return true;
}


function jungle2(){
   
    var arra= document.getElementsByTagName("input");
    console.log(arra[13].value);
    for(var i=8;i<15;i++){
        if(arra[i].value==""){
            alert("请填入完整的信息");
            return false;    
        }       
    }
    return true;
}
/**账号判定 */
var ac=document.getElementById("acc");
var d=0;
ac.onclick=function(){
    if(d==0 || ac.value=="账号格式有误,请输入4-18位账号"){
    ac.value="";
    d=1;
    }
}
ac.onblur=function(){
    if(ac.value=="" || (ac.value.length<4 || ac.value.length>18)){
        ac.style.border="1px solid red";
        
        ac.placeholder="账号格式有误,请输入4-18位账号"
    }
    else ac.style.border="1px solid rgb(128, 142, 155)";
}
/**注册模式切换 */
$(document).ready(
    function(){
        $(".reg2").css("display","none");
        $(".reg1").css("display","block");
    }
);
var s1=document.getElementById("span1");
var s2=document.getElementById("span2");
var mode=0;
s2.onclick=function(){
 if(mode==0){
    s2.style.color="red";
    s2.style.backgroundColor="rgb(223, 227, 230)";
    s1.style.color="rgb(223, 227, 230)";
    s1.style.backgroundColor="rgb(128, 142, 155)";
    mode=1;
    $(".reg1").css("display","none");
    $(".reg2").css("display","block");
 }
}
s1.onclick=function(){
    if(mode==1){
       s1.style.color="red";
       s1.style.backgroundColor="rgb(223, 227, 230)";
       s2.style.color="rgb(223, 227, 230)";
       s2.style.backgroundColor="rgb(128, 142, 155)";
       mode=0;
       $(".reg2").css("display","none");
       $(".reg1").css("display","block");
    }
   }

   /**个人隐私信息判定 */
   /**name判定 */
var ne=document.getElementById("name");
var d=0;
ne.onclick=function(){
    if(d==0 || ne.value=="姓名不可为空"){
    ne.value="";
    d=1;
    }
}

ne.onblur=function(){
    if(ne.value==""){
        ne.style.border="1px solid red";
        ne.placeholder="姓名不可为空";
     }
    else ne.style.border="1px solid rgb(128, 142, 155)";
}

var cd=document.getElementById("card");
var e=0;
cd.onclick=function(){
    if(d==0 || cd.value=="身份证不可为空"){
    cd.value="";
    e=1;
    }
}

cd.onblur=function(){
    if(cd.value==""){
        cd.style.border="1px solid red";
        cd.placeholder="身份证不可为空";
     }
    else cd.style.border="1px solid rgb(128, 142, 155)";
}

var num=parseInt("1");
$(document).ready(setInterval(function(){
    if(num==1){
    $("#ima1").css({"transform":"translateX("+-280*num+"px)","transition":"2s"});
    setTimeout(
        function(){$("#ima1").css({"transform":"translateX(280px)","transition":"0s"})},3000);
    }

    if(num<=2){
    $("#ima2").css({"transform":"translateX("+-280*num+"px)","transition":"2s"});
    if(num==2){
    setTimeout(
        function(){$("#ima2").css({"transform":"translateX(560px)","transition":"0s"})},3000);
    }}
    
    if(num<=3){
    $("#ima3").display="block";
    $("#ima3").css({"transform":"translateX("+-280*num+"px)","transition":"2s"});
    $("#ima3").display="none";
    
    if(num==3){
        $("#ima1").css({"transform":"translateX(0px)","transition":"2s"});
        setTimeout(
            
            function(){
            $("#ima3").css({"transform":"translateX(560px)","transition":"0s"})},2000);
            
        }
            }
    if(num==3){
        num=0;
    }
    else num=num+1;
    
},2000)
)

