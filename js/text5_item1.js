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
	console.log(1);
	var to_big = true;
	$(".big_img").hide();
	$("li").click(function(){
		if(to_big){
			var imgsrc = $(this).find("img").attr("src");
	    	console.log(imgsrc);
		 	$("#img").attr("src", imgsrc);
 			$(".big_img").show();
 			$("ul").css("opacity","0.4");
		}
		to_big = false;
		console.log(to_big);
	}); 
	
	$(".big_img").click(function(){
	 	$(this).hide();
	 	$("ul").css("opacity","1.0");
	 	to_big=true;
	 	console.log(to_big);
	});			
});



