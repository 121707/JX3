$().ready(function(){
    $(".re_bot").click(function(){
        if($(".num").val()!="webdesign" || $(".pass").val()!="123456"){
            alert("登陆失败,请输入正确的信息")
        }
        else{
            alert("登录成功，正在跳转官网")
            setTimeout(function(){
                window.open("about:blank","_self").close()  
                window.open("file:///D:/VS%20code/%E7%BD%91%E9%A1%B5%E8%AE%BE%E8%AE%A1/%E6%9C%9F%E6%9C%AB%E5%A4%A7%E4%BD%9C%E4%B8%9A/%E5%AE%98%E7%BD%91/Untitled-1.html");
            },1000)}

    })


    $(".num").click(function(){
        $(".num").val("");
    })
    $(".pass").click(function(){
        $(".pass").val("");
        
    })
    $(".num").blur(function(){
        $(".num").css({"border":"none"});
        if($(".num").val()==""){$(".num").css({"border":"2px solid red"})
        $(".num").val("请输入您的账号！！！")
    }})

    $(".pass").blur(function(){
        $(".pass").css({"border":"none"});
        if($(".pass").val()==""){$(".pass").css({"border":"2px solid red"})
        

    }
    })
        })