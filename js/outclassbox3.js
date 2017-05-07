/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-03 11:29:10
 * @version $Id$
 */
function array(){
	console.log('1');
	var movies = new Array("aaa","bbb","ccc");
	if(movies.constructor == String){
		alert("movies is string");
	}else if(movies.constructor == Array){
		alert("movie is array"+" and the length of array is :"+movies.length);
	}
}
function concat_join(){
	var movies = Array("aaa","bbb","ccc");
	var newmovie = "ddd";
	var hotmovie = movies.concat(newmovie);
	showmovies(movies,"old");
	shownewmovies(hotmovie,"new");
	function showmovies(movies,description){
		document.write(description+":<hr/>");
		for(var i=0;i<movies.length;i++){
			document.write(movies[i]);
			if(i!=movies.length-1)
				document.write(",");
		}
		document.write("<hr/>");
	}
	function shownewmovies(movies,description){
		document.write(description+":<hr/>");
		document.write(movies.join("_"));
	}
}
function push_pop_shift_reverse_slice(){
	var food = new Array("aaa","bbb");
	document.write(food.join("_"));
	document.write("<hr/>");

	var length = food.push("ccc","ddd");
	document.write(length);
	document.write(food.join("_"));
	document.write("<hr/>");

	var lastfood = food.pop();
	document.write(lastfood);
	document.write("<hr/>");

	var firstfood = food.shift();
	document.write(firstfood);
	document.write("<hr/>");	

	document.write(food.join("_"));
	document.write("<hr/>");

	food.unshift("eee");
	document.write(food.join("_"));
	document.write("<hr/>");

    food.push("qqq","ppp");
    food.push("www");
    document.write(food.join("_"));
	document.write("<hr/>");

	food.splice(2,2,"fff");
	document.write(food.join("_"));
	document.write("<hr/>");
 
 	var betterfood = food.slice(1,4);
 	document.write(betterfood);
 	document.write("<hr/>");
 	document.write(betterfood.reverse());
    document.write("<hr/>");
    document.write(food.sort());
}

function _2D_array(){
	var title = new Array("aaa","bbb","ccc");
	var movies = new Array();
	movies[0] = new Array("111","2011","80");
	movies[1] = new Array("222","2011","70");
	movies[2] = new Array("333","2011","60");
	movies[3] = new Array("444","2011","50");
	document.write("<table border='1'>");
	document.write("<tr>");
	for(var i=0;i<title.length;i++)
		document.write("<th>"+title[i]+"</th>");
	document.write("</th>");
	for(var i=0;i<movies.length;i++){
		document.write("<tr>");
		for(var j=0;j<movies[i].length;j++)
			document.write("<td>"+movies[i][j]+"</td>");
		document.write("</th>");
	}
}
function newstring(){
	//the same space
	//str1 or str2 is 基本数据类型
	var str1 = "aaa";
	var str2 = "aaa";
	//the different space
	//obj1 or obj2 is 对象
	var obj1 = new String("aaa");
	var obj2 = new String("aaa");
    //the same space
	//obj1 or obj2 is function
	var fun1 = String("aaa");
	var fun2 = String("aaa");

    document.write(typeof(str1));
    document.write(typeof(obj1));    
    document.write(typeof(fun1));

	console.log(str1 == str2);
	console.log(obj1 == obj2);
	console.log(fun1 == fun2);
}

function string_ways(){
	var name = "对象，常有两层意思，指行动";
	var result = "";
	var result2 = "";

	for(var i=0;i<name.length;i++){
		var str = name.charAt(i);
		if(i%2 == 1)
			str = str.bold();
		str = str.fontsize(i%3);
		if(i%3 == 0)
			str = str.fontcolor("red");
		if(i%4 ==0)
			str = str.anchor("anchor1");
		result = result+str;
	}

	document.write(name);
	document.write("<hr/>");
	document.write(result);
	document.write("<hr/>");

	for(var i=0;i<name.length;i++){
		var str = name.charAt(i);
		if(i%2 == 1)
			str = str.sup();
		str = str.fontsize(i);
		if(i%3 == 0)
			str = str.sub();
		result2 = result2+str;
	}

	document.write(name);
	document.write("<hr/>");
	document.write(result2);
	document.write("<hr/>");

	document.write("replace:"+name.replace(/两层意思/,"aaaa"));
	document.write("<hr/>");

    var song = "abC cYe fEh IJK lm No pT Qqr sTTTtuv wDDxyz";
	var word = song.split(" ");
	var wordresult = "";
	for(var i=0;i<word.length;i++){
		if(i%2 == 1)
			word[i] = word[i].toUpperCase();
		else
			word[i] = word[i].toLowerCase();
		wordresult = wordresult+word[i]+" ";
	}
	document.write(word);
	document.write("<hr/>");
	document.write(wordresult);
	document.write("<hr/>");

	var index1 = name.indexOf("层");
	var index2 = name.indexOf("层",8);
	
	document.write("层:"+index1);
	document.write("<hr/>");

	document.write("层:"+index2);
	document.write("<hr/>");
	

	var index3 = name.lastIndexOf("层");
	// '7' 还是表示从前往后的下标
	// 所以从这个下标号位置向前找
	var index4 = name.lastIndexOf("思",7);
	
	document.write("层:"+index3);
	document.write("<hr/>");

	document.write("层:"+index4);
	document.write("<hr/>");
	
   
    document.write(name.charAt(4));
    document.write("<hr/>");
    //-5表示从后往前数第5个位置
    //2 start -5 end   is (，常有两层意)
    document.write(name.slice(2,-5));
    document.write("<hr/>");
    
    //substring 不能输入负数
    //输出长度是end - start 的长度，如果start>end 那么会自动交换end 和start的值
    document.write(name.substring(5,3));
    document.write("<hr/>");


    


}
function newdate(){
	var mydate1 = new Date();
	var mydate2 = new Date(1218253167595);
	var mydate3 = new Date(2015,9,2);
	var mydate4 = new Date(2015,9,2,12,08,16);
	var mydate5 = new Date("9/25/2015 9:25:38");
	var mydate6 = new Date("April 25,2048");
	var mydate7 = new Date("Apr 25,2048 17:32:16");

	showtime(mydate1);
	showtime(mydate2);
	showtime(mydate3);
	showtime(mydate4);
	showtime(mydate5);
	showtime(mydate6);
	showtime(mydate7);

	function showtime(mydate){
		var datestr = "";
		var year = mydate.getFullYear();
		var month = mydate.getMonth()+1;
		var date = mydate.getDate();
		var hour = mydate.getHours();
		var minute = mydate.getMinutes();
		var second = mydate.getSeconds();
		datestr = datestr+year+"/"+month+"/"+date+"/"
		             +hour+":"+minute+":"+second+"</br>";
		document.write(datestr);
	}
}
function math(){
	document.write("</br>Math.PI="+Math.PI);
	document.write("</br>Math.E="+Math.E);
	document.write("</br>Math.LN2="+Math.LN2);
	document.write("</br>Math.LN10="+Math.LN10);
	document.write("</br>Math.LOG2E="+Math.LOG2E);
	document.write("</br>Math.LOG10E="+Math.LOG10E);
	var num = Math.random()*100;	
	var fu_num = Math.random()*(-100);
	var float_num = Math.random()+1;
	document.write("</br>num="+num);
	document.write("</br>fu_num="+fu_num);
	document.write("</br>float_num="+float_num);
	document.write("</br>Math.abs(fu_num)="+Math.abs(fu_num));
	document.write("</br>Math.ceil(float_num)="+Math.ceil(float_num));
	//document.write("</br>Math.floor(2.11)="+floor(2.11));
	document.write("</br>Math.exp(num)="+Math.exp(num));
	document.write("</br>Math.log(num)="+Math.log(num));
	document.write("</br>Math.sqrt(num)="+Math.sqrt(num));
	document.write("</br>Math.round(2.11)="+Math.round(2.11));
	document.write("</br>Math.sin(num)="+Math.sin(num));
	document.write("</br>Math.tan(num)="+Math.tan(num));
	document.write("</br>Math.cos(num)="+Math.cos(num));
	document.write("</br>Math.min(1,2015)="+Math.min(1,2015));
	document.write("</br>Math.max(1,2015)="+Math.max(1,2015));
	document.write("</br>Math.pow(2,3)="+Math.pow(2,3));
}

