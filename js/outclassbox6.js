/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-03 11:29:10
 * @version $Id$
 */


$(document).ready(function(){
	// 属性操作 
  $("button:eq(0)").click(function(){
    $("img:eq(0)").attr("width","180");
  });
  $("button:eq(1)").click(function(){
	$("img:eq(0)").attr("src","/img/smile_10.jpg");
  });
  $("button:eq(2)").click(function(){
  	//超过两个属性{,,,}
  	$("img:eq(0)").attr({src:"/img/smile_9.jpg",title:"beautiful"});
  });
  $("img:eq(0)").attr("title",function(){return this.src});
  //$("img").removeattr("title");
  $("input[type=button]:eq(0)").attr("value","all_select");
  $("input[type=button]:eq(1)").attr("value","all_not_sekect");
  $("input[type=button]:eq(2)").attr("value","removeprop_disabled");
  $("input[type=button]:eq(3)").attr("value","disabled");

  $("input[type=button]:eq(0)").click(function(){
      $("input[type='checkbox']").prop("checked",true);
  });
  $("input[type=button]:eq(1)").click(function(){
      //$("input[type='checkbox']").prop("checked",function(index,oldValue){return !oldValue;});
  	   //$("input[type='checkbox']").prop({checked:false});
  	   $("input[type='checkbox']").prop("checked",false);
  });
  $("input[type=button]:eq(2)").click(function(){   
  	   $("input[type='checkbox']").prop({checked:true,disabled:true});  
  });
   $("input[type=button]:eq(3)").click(function(){   
  	   $("input[type='checkbox']").prop("disabled",false); 
  });
   // 样式操作  attr both ok
   // $("^^^").attr("class","newclass");
  $("button:eq(3)").click(function(){
    $("p:first").removeClass("intro").addClass('main');
  });
  $(".btn1").click(function(){
    $("p").toggleClass("main");
  });
  $("button:eq(5)").click(function(){
    $("p").css({
      "color":"white",
      "background-color":"#98bf21",
      "font-family":"Arial",
      "font-size":"20px",
      "padding":"5px"
    });
  });
  $("img:eq(1)").css("width","20px");
  // 内容操作 
    //html()
   var strHTML = $("#divShow").html();// 获取HTML 内容(包含div下面的两个格式b/i)
   var strHTML2 = $("#divShow b i").html(); //获取HTML内容(不包含div下面的两个格式b/i)
   $("#divHTML").html(strHTML);// 设置HTML 内容
   $("#divHTML2").html(strHTML2); //设置HTML内容
   var strHTML3 = $("div").html();//获取第一个匹配元素的内容<div id="divShow">
   $("#divHTML3").html(strHTML3); //设置HTML内容
   
   //text()
   var strText = $("#divShow").text();// 获取文本内容
   $("p").html("<h1><font color='red'>"+strHTML+"</font></h1>");
   var strText2 = $("div").text();
   $("#divText").text(strText);// 设置文本内容
   $("#divText2").text(strText2);// 设置文本内容
   $("a").text(strText);

   //val()
   $("select").change(function(){ // 设置列表框change 事件
   // 获取列表框所选中的全部选项的值
	   alert($("select").val());
	   var strSel = $("select").val().join(",");
	   $("input").val(strSel); // 显示列表框所选中的全部选项的值
	});
   
});





	




 



