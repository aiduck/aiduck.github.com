/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-03 11:29:10
 * @version $Id$
 */
var x = 0;
var y = 0;
var timer;
var mywindow;
function window_open(){
	mywindow = window.open('http://www.baidu.com','','width = 400,height = 300,toolbar=yes,menubar=yes,location=yes,status=yes,fullscreen=yes,resizeble=yes,scrollbars=yes,titlebar=yes,left=x,top=y');
	//mywindow.document.write("this is mywindow");
}
//wrong
function window_move(){
	x = x+100;
	y = y+100;
	mywindow.moveBy(x,y);
	timer = setInterval("window_move",1000);
}
function window_stop(){
	clearInterval(timer);
}
function window_close(){
	mywindow.close();
}

function checkusername(){
	var username = document.getElementById("username");
	if(username.value.length == 0){
		alert("username can't be empty");
		return false;
	}
	if(username.value.length<3 || username.value.length>20){
		alert("username's number is in 3~16");
		username.select();
		return false;
	}
	return true;
}
function checkuserpwd(){
	var userpwd = document.myform.userpwd.value;
	var i;
	if(userpwd.length<6){
		alert("userpwd's length can't less than 6");
		return false;
	}
	
	for(i=0;i<userpwd.length;i++){
		var tmp = userpwd.charAt(i);
		if(isNaN(tmp)){
			alert("password should use number");
			return false;
		}
		return true;
	}
}
//一直报错，在document中重新实现了
function checkemail(){
	var email = document.forms[0].email;
	var emailReg = /^([a-zA-Z0-9_-]) + @([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	if(!emailReg.test(email.value)){
		alert("the email is wrong and put it again");
		email.focus();
		return false;
	}
	return true;
}
function checkmobilephone(){
	var mobilephone = document.forms[0].elements[3];
	var mobilephoneReg = /^1[3|4|5|8][0-9]{9}$/;
	if(!mobilephoneReg.test(mobilephone.value)){
		alert("mobilephone is wrong");
		mobilephone.focus();
		return false;
	}
	return true;
}
function checkForm(){
	return checkusername() && checkuserpwd() && checkemail() &&checkmobilephone();
}
function checkForml(){
	if(checkusername() && checkuserpwd() && checkemail() &&checkmobilephone()){
		document.myform.action = "http//www.moocollege.cn";
		document.myform.target="_blank";
		document.myform.submit(); 
	}
}

//在表头插入一行
function insertstart(){
	appendRow(1);
}
//在表尾插入一行
function insertend(){
	var index=mytable.rows.length;
	appendRow(index);
}
// 添加一行
function appendRow(index){
	var mytable = document.getElementById("mytable");
	//read message;
	var row = mytable.insertRow(index);
	var idcell = row.insertCell(0);
	var namecell = row.insertCell(1);
	var deletecell = row.insertCell(2);
	idcell.innerHTML = document.getElementById("userid").value;
	//wrong
	namecell.innerHTML = document.getElementById("username").value;
	deletecell.innerHTML = "<input type='button' value='delete' onclick='deleteRow(this)'/>";
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

var dataArray = new Array();
function amount(){
	var sum=0;
	var mytable = document.getElementById("mytable");
	var tbodylist = mytable.childNodes;
	//alert(tbodylist.length);
	for(var i=0;i<tbodylist.length;i++){
		var tbody = tbodylist.item(i);
		if(tbody.nodeType == 1){
			var rowlist = tbody.childNodes;
			//alert(rowlist.length);
			for(var j=1;j<rowlist.length;j++){
				var row=rowlist.item(j);
				if(row.nodeType == 1){
					var celllist = row.childNodes;
					//alert(celllist.length);
					var lastcell = celllist.item(5);
					if( lastcell != null){
						var salesAmount = parseInt(celllist.item(5).innerHTML);
						sum=sum+salesAmount;
					}
				}
			}
		}
	}
    var tableRow = mytable.getElementsByTagName("tr");
    var lastRow = tableRow.item(tableRow.length-1);
    lastRow.lastChild.previousSibling.innerHTML = sum;
}