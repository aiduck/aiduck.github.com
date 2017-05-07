/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-03 11:29:10
 * @version $Id$
 */

// <!-- document Attribute -> cookie  -->
// $(document).ready(function(){
// 	$("input[type=button]:even").on("click",function(){
// 		//console.log(1);
// 		saveCookie('register');

// 	});
// 	$("input[type=button]:odd").on("click",function(){
// 		//console.log(2);	
// 		onloadCookie('register');
// 	});
// });
// var cookieSplit = '@';
// function saveCookie(mes){
// 	var name = document.forms[0].username.value;
// 	//console.log(name);
// 	var pwd = document.forms[0].userpwd.value;
// 	//console.log(pwd);
// 	var time = document.forms[0].savetime.value;
// 	//console.log(time);
// 	var date = new Date();
// 	if(time == "-1")
// 		date.setDate(date.getDate()+time);
// 	//escape() 函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串。
// 	//unescape() 函数可对通过 escape() 编码的字符串进行解码。
// 	//toGMTString() 方法可根据格林威治时间 (GMT) 把 Date 对象转换为字符串，并返回结果。
// 	//不赞成使用此方法。请使用 toUTCString() 取而代之！！
// 	// document.cookie = cookieSplit + mes + "=" + escape(name) +","
// 	//                  + escape(pwd) + ";expries="+date.toGMTString();
// 	document.cookie = cookieSplit + mes + "=" + escape(name) +","+ escape(pwd) + "."+"expires"+date.toUTCString();
// 	//console.log(date.toUTCString());
// 	onloadCookie(mes);                  
// }
// function onloadCookie(mes){
// 	//console.log(3);
// 	var currentCookie = document.cookie;
// 	//console.log(currentCookie);
// 	//console.log(mes);
// 	// Cookie”是小量信息，由网络服务器发送出来以存储在网络浏览器上，
// 	// 从而下次这位独一无二的访客又回到该网络服务器时，
// 	// 可从该浏览器读回此信息。这是很有用的，让浏览器记住这位访客的特定信息，
// 	// 如上次访问的位置、花费的时间或用户首选项（如样式表）。
// 	// Cookie 是个存储在浏览器目录的文本文件，当浏览器运行时，
// 	// 存储在 RAM 中。一旦你从该网站或网络服务器退出，
// 	// Cookie 也可存储在计算机的硬驱上。当访客结束其浏览器对话时，
// 	// 即终止的所有 Cookie。
	
// 	var beginpart = cookieSplit + mes +"=";
// 	//console.log(beginpart);
// 	//indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
// 	var startposition = currentCookie.indexOf(beginpart);
// 	//console.log(startposition);
// 	var cookiedata = "";
// 	if(startposition == -1){
// 	 	document.forms[0].username.value = "";
// 	 	document.forms[0].userpwd.value = "";
// 	 }
// 	else{
// 		var endposition = currentCookie.indexOf(".",startposition);
// 		//console.log(endposition);
// 		if(endposition == -1)
// 			endposition = currentCookie.length;
// 		cookiedata = currentCookie.substring(startposition+(beginpart).length,endposition);
// 		var dates = cookiedata.split(",");
// 		document.forms[0].username.value = unescape(dates[0]);
// 		document.forms[0].userpwd.value = unescape(dates[1]);
// 	}
// 	document.getElementById("cookiediv").innerHTML = "所有的cookie信息："
// 	+(document.cookie == ""?"<font color='red'>暂无cookie信息</font>":document.cookie);
// }
// **************************************************************************************
//<!-- forms way ->  submit -->
// function checkname(){
// 	var username = document.myform_two.user_name;
// 	if(username.value.length==0){
// 		alert("用户名不正确");
// 		return false;
// 	}
// 	if(username.value.length<3 || username.value.length>16){
// 		alert("用户名在3~16位之间，重新输入");
// 		//select() 方法用于选择该元素中的文本。
// 		//<textarea id="txt1">Hello world....</textarea>
// 		//document.getElementById("txt1").select()
// 		username.select();
// 		return false;		
// 	}
// 	return true;
// }
// function checkpwd(){
// 	var userpwd = document.myform_two.user_pwd.value;
// 	if(userpwd.length < 6){
// 		alert("密码必须在6~*位之间");
// 		return false;
// 	}
// 	for(var i=0;i<userpwd.length;i++){
// 		//charAt()
// 		var temp=userpwd.charAt(i);
// 		if(isNaN(temp)){
// 			//charAt() 方法可返回指定位置的字符。
// 			//请注意，JavaScript 并没有一种有别于字符串类型的字符数据类型，
// 			//所以返回的字符是长度为 1 的字符串。
// 			//注释：字符串中第一个字符的下标是 0。
// 			//如果参数 index 不在 0 与 string.length 之间，该方法将返回一个空字符串。
// 			alert("密码必须使用数字");
// 			return false;			
// 		}
// 	}
// 	return true;
// }
// function checkemail(){
// 	var useremail = document.forms[0].user_email;
// //^ 表示开头.
// //([a-zA-Z0-9_-])+ a-z A-Z 0-9 的字符和下划线_,横线- (实际上这里不用加圆括号)
// // + 表示这样的字符有 一个或n个(也就是大小写字母数字下划线横线有1个或n个
// // @ 就是@符号..表示接下来是个@符号
// // ([a-zA-Z0-9_-])+ 然后又是大小写字母数字下划线横线有1个或n个
// // \.表示小数点 .
// // \.[a-zA-Z0-9_-] 匹配 小数点后边跟 大小写字母数字下划线横线,这里有个小错误就是没有指定重复次数所以只能匹配一个字符,比如 123@qq.com 只能匹配到 123@qq.c
// // (\.[a-zA-Z0-9_-])+ 这里表示可以有1次或n次重复的情况 比如 123@qq.a.b.c 
// 	var emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
// 	//test() 方法用于检测一个字符串是否匹配某个模式.
// 	//如果字符串 string 中含有与 RegExpObject 匹配的文本，则返回 true，否则返回 false。
// 	if(!emailReg.test(useremail.value)){
// 		alert("邮箱格式不正确，重新输入");
// 		//focus() 方法用于为 checkbox 赋予焦点。
// 		//jquery
// 		//将函数绑定到 focus 事件
// 		//$(selector).focus(function)
// 		useremail.focus();
// 		return false;
// 	}
// 	return true;
// }
// function checkphone(){
// 	var userphone = document.forms[0].elements[3];
// 	var phoneReg = /^1[3|4|5|8][0-9]{9}$/;
// 	if(!phoneReg.test(userphone.value)){
// 		alert("手机号码格式不正确");
// 		userphone.focus();
// 		return false;
// 	}
// 	return true;
// }
// function checkForm(){
// 	return checkname() && checkpwd() && checkemail() && checkphone();
// }
// function checkForm1(){
// 	if(checkname() && checkpwd() && checkemail() && checkphone()){
// 		document.myform_two.action="http://www.baidu.com/";
// 		document.myform_two.target="_blank";
// 		document.myform_two.submit();
// 	} 		
// }

// **************************************************************************************
//<!-- table -->
//在表头插入一行
$(document).ready(function(){
	console.log(1);
	$("input[id='button']:eq(0)").click(function(){
		console.log(2);
		var index=mytable.rows.length;
		console.log(index);
		appendRow(index);
	});
	$("input[id='button']:eq(1)").click(function(){
		appendRow(1);
	});
	$("input[id='button']:eq(2)").click(function(){
		appendcaption();
	});
	$("input[id='button']:eq(3)").click(function(){
		removecaption();
	});
	$("input[value='删除']").click(function(){
		deleteRow(this);
	});
});

// 添加一行
function appendRow(index){
	var table = document.getElementById("mytable");
	console.log(table);
	//<table border="1" width="200" id="mytable">
	var row = table.insertRow(index);
	console.log(row);
	//<tr></tr>
	var idcell = row.insertCell(0);
	console.log(idcell);
	//<tr>
	//<td></td>
	//</tr>
	var namecell = row.insertCell(1);
	var deletecell = row.insertCell(2);
    idcell.innerHTML= index;
	namecell.innerHTML="admin"+index;
	if(document.getElementById("id_text").value!="")
		idcell.innerHTML= document.getElementById("id_text").value;
	if(document.getElementById("name_text").value!="")
		namecell.innerHTML= document.getElementById("name_text").value;
	
	console.log(idcell.innerHTML);
	deletecell.innerHTML = "<input type='button' value='删除' onclick='deleteRow(this)'/>";
}
// 删除一行
function deleteRow(bntdelete){
	var currentindex = bntdelete.parentNode.parentNode.rowIndex;
	var mytable = document.getElementById("mytable");
	mytable.deleteRow(currentindex);
}
// 添加表格标题
function appendcaption(){
	var mytable = document.getElementById("mytable");
	var caption = mytable.createCaption();
	caption.innerHTML = "table table table";
}
// 移除表格标题
function removecaption(){
	var mytable = document.getElementById("mytable");
	mytable.deleteCaption();
}
