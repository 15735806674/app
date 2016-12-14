
    function resize(origianSize,type){
        var type=type||"x";
        if(type=="x"){
            var clientw=document.documentElement.clientWidth;
            var html=document.querySelector("html");
            html.style.fontSize=clientw/origianSize*100+"px";
        }else if(type=="y"){
            var clienth=document.documentElement.clientHeight;
            var html=document.querySelector("html");
            html.style.fontSize=clienth/origianSize*100+"px";
        }
    }
