$(document).ready(function(){
   console.log(1); 
   
    // <img class="logo" src="img/logo.png">
   	// <img class="background" src="img/1.jpg"/>
    var j=0;
    var img_logo_src;
    $("button:eq(0)").click(function(){
       console.log(2);
       j++;
       if(j>=6)
           j=j%6;
       img_logo_src = "img/yhcj/logo"+j+".png";
       $(".logo").attr("src",img_logo_src);

    });
    
    var i=1;
    var img_bg_src;
    $("button:eq(1)").click(function(){
       console.log(2); 
       i++;
       if(i>86)
           i=i%86+1;
        
       img_bg_src = "img/yhcj/"+i+".jpg";
       $(".background").attr("src",img_bg_src);
    });
});

