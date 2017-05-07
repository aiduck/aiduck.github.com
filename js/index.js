/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-03 11:29:10
 * @version $Id$
 */


/*var tdlist=document.querySelectorAll("td");
for(i=0;i<tdlist.length();i++){
	var item=tdlist[i];
	item.addEventListener("click",showmsg);
}

function showmsg(){
	console.log(1);
}
*/
//way1
/*var num=0;
function showmsg(){
	console.log('click');
    num++;
    if(num%2==0){
    	document.getElementById('tb').style.backgroundColor = "red";
    }
	else{
		document.getElementById('tb').style.backgroundColor = "white";
	}
}*/
// way2
/*var n = 1;
document.getElementById('td11').addEventListener("click",function(){
	    console.log('click');
		if(n===1)
		{
			document.getElementById('tb').style.backgroundColor = "red";
			// document.getElementById('td11').style.backgroundColor = "yellow";
		}
		else{
			document.getElementById('tb').style.backgroundColor = "white";
			// document.getElementById('td11').style.backgroundColor = "white";
		}
		n*=-1;
		}
);*/
/*//way3
var tdlist=document.querySelectorAll("td");
for(i=0;i<tdlist.length;i++){
	console.log('click');
	var item=tdlist[i];
	item.addEventListener("click",showmsg);
}
var num=0;
function showmsg(e){
	console.log('click');
	num++;
    if(num%2==0){
    	document.getElementById('tb').style.backgroundColor = "red";
    }
	else{
		document.getElementById('tb').style.backgroundColor = "white";
	}
}*/

//position11
var tdlist=document.querySelectorAll("td")[0];
var item=tdlist;
	item.addEventListener("click",showmsg);
var num=0;
function showmsg(e){
	console.log('click');
	num++;
    if(num%2==1){
    	document.getElementById('tb').style.backgroundColor = "red";
    }
	else{
		document.getElementById('tb').style.backgroundColor = "white";
	}
}

//position22
var tdlist=document.querySelectorAll("td")[1];
var item=tdlist;
	item.addEventListener("click",showmsg1);
var num=0;
function showmsg1(e){
	console.log('click');
	var data=new Date();
	var str= data.getFullYear()+'-'+data.getMonth()+'-'+data.getDate();
	console.log(str);
	num++;
    if(num%2==1){
    	// e.innerHTML = str;//动态修改表格的内容为222
    	 item.innerHTML=str;
    }
	else{
		// e.innerHTML = "12";
		item.innerHTML="12";
	}
}

//position33
var tdlist=document.querySelectorAll("td")[2];
var item=tdlist;
	item.addEventListener("click",showmsg2);
function showmsg2(e){

	console.log('click');
	var currentid=document.querySelector("#tb");
    console.log(currentid);
	var tr=document.createElement("tr");
	var td1=document.createElement("td");
	var td2=document.createElement("td");
	/*item.appendChild(tr);
	tr.appendChild(td1);
	tr.appendChild(td2);*/	
	td1.innerHTML=77;
	td2.innerHTML=88;
    currentid.appendChild(tr);
	tr.appendChild(td1);
	tr.appendChild(td2);
}

//position44
var tdlist=document.querySelectorAll("td")[3];
var item=tdlist;
	item.addEventListener("click",showmsg3);
var num=0;
function showmsg3(e){
	console.log(tdlist);
	var parent=tdlist.parentNode;
	console.log(parent);
	parent.parentNode.removeChild(parent);
/*	var currenttr=tdlist.parentNode;
    console.log(currenttr);
	var currentid=document.querySelector("#tb");
    console.log(currentid);
	currentid.removeChild(currenttr);*/
}
//position55
var tdlist=document.querySelectorAll("td")[4];
var item=tdlist;
	item.addEventListener("click",showmsg4);
var num=0;
function showmsg4(e){
   console.log('click');
   
   var x=e.clientX;
   var y=e.clientY;
   console.log(x);
   console.log(y);
   alert("(" + x + "," + y +")");
}

//position66
var tdlist=document.querySelectorAll("td")[5];
var item=tdlist;
	item.addEventListener("click",showmsg5);
var num=0;
function showmsg5(e){
   console.log('click');
   window.open("http://www.baidu.com");
}





