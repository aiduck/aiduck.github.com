/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-03 11:29:10
 * @version $Id$
 */
//浏览器兼容..................................................................................................................
var w = window;
requestAnimationFrame = w.requestAnimationFrame ||
                  w.webkitRequestAnimationFrame || 
                      w.msRequestAnimationFrame ||
                     w.mozRequestAnimationFrame;
$(document).ready(function(){
	// 初始状态
   $(".ui-grid-nov div:eq(0)").addClass("ui-grid-active");
   $(".content img:eq(0)").show();
   $(".content img:eq(1)").hide();
   $(".content img:eq(2)").hide();
   // 点击切换
   $(".ui-grid-nov div").click(function(){
   	  	console.log(1);
   	    // 还原导航背景色
   	    $(".ui-grid-nov div:eq(0)").removeClass("ui-grid-active");
   	    $(".ui-grid-nov div:eq(1)").removeClass("ui-grid-active");
   	    $(".ui-grid-nov div:eq(2)").removeClass("ui-grid-active");
   	    // var divobject = $(".ui-grid-nov").children();
   	    // console.log(divobject);
   		var activediv = $(this).attr('class');
  		 if( activediv == "first ui-grid-1"){
			$(".content img:eq(0)").show();
   			$(".content img:eq(1)").hide();
  			$(".content img:eq(2)").hide();
  			$(".ui-grid-nov div:eq(0)").addClass("ui-grid-active");
  		 }
  		 if( activediv == "second ui-grid-1 ui-grid"){
			$(".content img:eq(0)").hide();
   			$(".content img:eq(1)").show();
  			$(".content img:eq(2)").hide();
  			$(".ui-grid-nov div:eq(1)").addClass("ui-grid-active");
  		 }
  		 if( activediv == "third ui-grid-1 ui-grid"){
			$(".content img:eq(0)").hide();
   			$(".content img:eq(1)").hide();
  			$(".content img:eq(2)").show();
  			$(".ui-grid-nov div:eq(2)").addClass("ui-grid-active");
  		 }

   });
});

