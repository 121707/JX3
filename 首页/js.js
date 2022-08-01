$().ready(
    function(){
    var rollnum=2;
    zydown();
    setTimeout(zyup,4000);
    roll(rollnum);
    


    function roll(rollnum){
    var src1=["image/gfsj_zy.mp4","image/gfsj_xj.mp4","image/gfsj_gy.mp4","image/gfsj_sl.mp4","image/gfsj_hh.mp4"
    ,"image/gfsj_sc.mp4"];
    var inter= setInterval(function(){
    switch(rollnum){
        case 1:{
              
            document.getElementById("videoroll").src=src1[0];
              rollnum=rollnum+1;
              zydown();
              setTimeout(zyup,4000);
              document.getElementById("videoroll").play();
              break;}
         
        case 2:document.getElementById("videoroll").src=src1[1];
              document.getElementById("videoroll").play();
              rollnum=rollnum+1;
              xjdown();
              setTimeout(xjup,4000);  
              
              break; 
        case 3:document.getElementById("videoroll").src=src1[2];
              document.getElementById("videoroll").play();
              gydown();
              rollnum=rollnum+1;
              setTimeout(gyup,4000);   
              break;      
        case 4:document.getElementById("videoroll").src=src1[3];
              document.getElementById("videoroll").play();
              sldown();
              rollnum=rollnum+1;
              setTimeout(slup,4000); 
              break; 
         case 5:document.getElementById("videoroll").src=src1[4];
              document.getElementById("videoroll").play();
              hhdown();
              rollnum=rollnum+1;
              setTimeout(hhup,4000); 
              break;      
        case 6:
             
             document.getElementById("videoroll").src=src1[5];
              document.getElementById("videoroll").play();
              scdown();
              rollnum=1;  
              setTimeout(scup,4000);   
              break; 
    } 
    console.log(rollnum);
    $("#zy").mouseover(function (){
        zydown();
    if(rollnum!=2){    
    $("#zy").mouseout(function (){
        zyup()
    })}})   
    $("#xj").mouseover(function (){
        xjdown();
    if(rollnum!=3){
    $("#xj").mouseout(function (){
        xjup();
    })}})  

    $("#gy").mouseover(function (){
        gydown();
    
    if(rollnum!=4){
    $("#gy").mouseout(function (){
        gyup();
    })}})   
    
    $("#sl").mouseover(function (){
        sldown();
    
    if(rollnum!=5){
    $("#sl").mouseout(function (){
        slup();
    })}})   
    
    $("#hh").mouseover(function (){
        hhdown();
     
    if(rollnum!=6){
    $("#hh").mouseout(function (){
        hhup();
    })}})  
    
    $("#sc").mouseover(function (){
        scdown();
    
    if(rollnum!=1){
    $("#sc").mouseout(function (){
        scup();
    })}})   
 },4000)}

 $("#choicelx").css("backgroundPositionY","-32px");
var nowroll=0;
var intropic=document.getElementsByClassName("introroll");
$(".introchoice").mouseover(function(){
    $(".introchoice").css("backgroundPositionY","0px");
    $(this).css("backgroundPositionY","-32px");
    var nextroll =($(this).index());
    $(".introroll").css("opacity","0");
    intropic[nextroll].style.opacity="1";
    if(nextroll==14)nowroll=-1;
    else nowroll=nextroll
    
})
    var introbot=document.getElementsByClassName("introchoice");
    var inter2 = setInterval(function (){
    $(".introroll").css("opacity","0");
    $(".introchoice").css("backgroundPositionY","0px");
    introbot[nowroll+1].style.backgroundPositionY="-32px";
    intropic[nowroll+1].style.opacity="1";
    nowroll=nowroll+1;
    if(nowroll==14)nowroll=0;
},4000)






    }
    
)

function zydown(){
    $("#zy").css({"background-position":"-308px 1px","top":"18px"})}
function zyup(){
    $("#zy").css({"background-position":"0px 18px","top":"0px"})}

function xjdown(){
    $("#xj").css({"background-position":"-357px 1px","top":"18px"})}
function xjup(){
    $("#xj").css({"background-position":"-50px 18px","top":"0px"})
        }
    
        function gydown(){
            $("#gy").css({"background-position":"-403px 1px","top":"18px"})};
        function gyup(){
                $("#gy").css({"background-position":"-95px 18px","top":"0px"})
            };
        function sldown(){
            $("#sl").css({"background-position":"-449px 1px","top":"18px"})}
        function slup(){
                $("#sl").css({"background-position":"-141px 18px","top":"0px"})
            };
      
        function hhdown(){
            $("#hh").css({"background-position":"-496px 1px","top":"18px"})}
        function hhup(){
             $("#hh").css({"background-position":"-188px 18px","top":"0px"})
            }
       function scdown(){
            $("#sc").css({"background-position":"-544px 1px","top":"18px"})}
        function scup(){
             $("#sc").css({"background-position":"-235px 18px","top":"0px"})
            }