/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-03 11:29:10
 * @version $Id$
 */

//jq -> document
var jqobject = $("input");
console.log(jqobject);
var do1 = jqobject[0];
var do2 = jqobject.get(1);
console.log(do1);
console.log(do2);
//result
//Object { length: 2, prevObject: Object, 2 more… }
//<input type="button" value="hello world" class="button orange">
//<input type="button" value="hello student" class="button orange">

//document -> jq
var docobject = document.getElementById("mydiv");
console.log(1);
//alert(docobject.innerHTML);
console.log(docobject.innerHTML);
console.log(docobject);
var jq = $(docobject);
//alert(jq.html());
console.log(jq.html());
console.log(jq);
//result
//aaaaaaaaaaaaaaa
//<div id="mydiv">
//aaaaaaaaaaaaaaa
//Object { length: 1, 1 more… }

//基本选择器
$(document).ready(
	function(){

		$("#mydiv").css("color","blue");
		$(".classdiv").css("font-size","20px");
		$("#mydiv,.classspan").css("background-color","red");
		$("span").css("font-weight","bold");
        
	}
);
//层次选择器
$(document).ready(
	function(){
		$("form input").css("width","500px");
        $("form>input").css("background-color","yellow");
        //$("label+input").css("border-width","4px");
        $("label").next("input").css("border-width","6px")
        //$("form~input").css("border-color","red");
        $("form").nextAll("input").css("border-color","blue")
	}
);
//过滤选择器
//表单选择器

//fieldset  对象
function myFunction1(){
var x = document.getElementById("myFieldset");
x.disabled = true;
}
//创建 FIELDSET 元素
function myFunction2(){
var x = document.createElement("FIELDSET");
var t = document.createTextNode("Insert content here...");
x.appendChild(t);
document.body.appendChild(x);
}
//appendChild() 方法向节点添加最后一个子节点。
function myFunction3(){
var node=document.createElement("LI");
var textnode=document.createTextNode("Water");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);
}

//您也可以使用 appendChild() 方法从一个元素向另一个元素中移动元素。
function myFunction4(){
var node=document.getElementById("myList2").lastChild;
document.getElementById("myList1").appendChild(node);
}
//方法在您指定的已有子节点之前插入新的子节点
function myFunction5(){
var newItem=document.createElement("LI");
var textnode=document.createTextNode("Water");
newItem.appendChild(textnode);

var list=document.getElementById("myList_be");
list.insertBefore(newItem,list.childNodes[0]);
}
//childNodes 属性返回节点的子节点集合，以 NodeList 对象
function myFunction6()
{
var txt="";
//获得 body 元素的子节点集合：
var c=document.body.childNodes;
for (i=0; i<c.length; i++)
  {
  txt=txt + c[i].nodeName + "<br>";
  };
var x=document.getElementById("demo_childnodes");  
x.innerHTML=txt;
}

//返回列表项的 previousSibling（前一个同胞节点）
//nextSibling 属性返回指定节点之后紧跟的节点，在相同的树层级中。
function myFunction7()
{
var itm=document.getElementById("item2");
var x=document.getElementById("demo_pre_next");  
x.innerHTML=itm.previousSibling.id;
}
function myFunction8()
{
var x=document.getElementById("demo_pre_next");  
var itm=document.getElementById("item1");
x.innerHTML=itm.nextSibling.id;
}
