/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-03 11:29:10
 * @version $Id$
 */

function change(){
	alert("name:"+window.name+"width:"+window.innerWidth+
		   "height:"+window.innerHeight);
}
function name_put() {
	var name=document.getElementById("text").value;
	document.write("<h3>"+name+"quanxiang:</h3>");
	switch(name){
		case "aaa":
			document.write("aaa1</br>aaa2");
		    break;
		case "bbb":
			document.write("bbb1</br>bbb2");
		    break;
	    case "ccc":
			document.write("ccc1</br>ccc2");
	   		break;
	}
}
function table(){
	document.write("<table border='1'>");
	document.write("<tr>");
	document.write("<th>id</th><th>number</th><th>money</th>");
	document.write("</tr>");
	var i=1;
	while(i<=2){
		document.write("<tr>");
		document.write("<td>"+i+"</td>");
		document.write("<td>FZ00"+i+"</td>");
		document.write("<td>"+(Math.random()*100).toFixed(2)+"</td>");
		document.write("</tr>");
		i++;
	}
}
function do_while(){
	var imgbegin="flower";
	var imgend='.jpg';
	var i=1;
	do{
		j=1;
		do{	
		  var img=imgbegin+"_"+i+"_"+j+imgend;
		  console.log(img);
		  document.write("<img src='img/flower/"+img+"'/>");
		  j++;
		}while(j<=3);
		i++;
	}while(i<=2);
}
function for_in(){
	var name="中华人民共和国旅游景区质量等级划分为五级";
	for(var i in name){
		document.write(i);
		document.write("<font size='"+i+"'>"+name.substr(i,2)+"</font>");
	}

	var authority=["aaa","bbb","ccc","ddd"];
	document.write("</br>");
	document.write("</br>");
	document.write("</br>");
	for(var t in authority){
		document.write(authority[t]+" ");
		document.write("</br>");
	}
	document.write("</br>");
	document.write("</br>");
	document.write("</br>");
	var person = {
		name:"guo",
		authority:"gggg",
		address:"shanghai",
		tel:"1355555"
	};
	for(var p in person){
		document.write(p+":"+person[p]+"</br>");
	}
}
function parse_NaN_eval(){
	document.write("parseInt('88.9'):"+parseInt('88.9')+"</br>");
	document.write("parseInt('8t'):"+parseInt('8t')+"</br>");
	document.write("parseInt('t8.9'):"+parseInt('t8.9')+"</br>");
    document.write("parseInt('0x10'):"+parseInt('0x10')+"</br>");
    document.write("parseInt('12',16):"+parseInt('12',16)+"</br>");
    document.write("</br>");
    document.write("</br>");
    document.write("parseFloat('88.93'):"+parseFloat('88.93')+"</br>");
    document.write("parseFloat('60year'):"+parseFloat('60year')+"</br>");
    document.write("parseFloat('she is 18 years old'):"+parseFloat('she is 18 years old')+"</br>");
    var str=20+30*50;
    document.write("</br>");
    document.write("</br>");
    document.write("eval(str):"+eval(str)+"</br>");
    document.write("</br>");
    document.write("</br>");
    document.write("isNaN('35'):"+isNaN('35')+"</br>");
    document.write("isNaN(35):"+isNaN(35)+"</br>");
    document.write("isNaN('name'):"+isNaN('name')+"</br>");
}
function alert_confirm(){
	do{
		var money=prompt("the money is:");
	    if(isNaN(money)){
	    	alert("the number is wrong");
	    	continue;
	    }
	    if(money<0)
	    	alert("aaa");
	    else if(money<1000)
	    	alert("bbb");
		else alert("ccc");

		var ctn=confirm("continue?");
		if(!ctn){
			alert("ending!");
			break;
		}
	}while(true)
}
function self_function(){
	function input(){
		return prompt("the number is:");
	}
	function count(data){
		var sum=0;
		for(var i in data){
			sum=sum+parseInt(data[i])
		}
		return sum;
	}
	var data=input();
	var sum=count(data);
	alert(data+"the number in data's sum is:"+sum);
}
function hidden_function(){
	var f=function(use){
		alert(use+"hello!");
	};
	// : and f can't lost
	var text=f;
	f("admin");
	text("admin2");
}
function return_function(){
	var use="guogy";
	(function fun_name(argument) {
		alert("welcome "+argument+" to the web world");
	})(use);
}

// end of learing
// start of homework



