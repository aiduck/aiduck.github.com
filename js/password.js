

function getmingwen() {
//获取textarea--mingwen中的明文
	var string = document.getElementById("mingwen").value;
//获取text中的数字
	var num = document.getElementById("yiwei").value;
//存放真正密文的数组
	var str=new Array();
//用来存放去除汉字开头标志%u符号的密文输出数组
	var stringing=new Array();
//存放临时单个密文字符的变量
	var ch;
//加密过程
	for(var i=0; i<string.length;i++){  
//处理空格  
		if (string.charCodeAt(i) == 32){
			ch=String.fromCharCode(string.charCodeAt(i));
			str.push(ch);
		}
//处理！~ /
		if (string.charCodeAt(i) >= 33 && string.charCodeAt(i) <= 47){
			ch=String.fromCharCode((string.charCodeAt(i)+parseInt(num)-33)%15+33);
			str.push(ch);		
		} 
//处理0~9
		if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57){
			ch=String.fromCharCode((string.charCodeAt(i)+parseInt(num)-48)%10+48);
			str.push(ch);
		} 
//处理：~@
		if (string.charCodeAt(i) >= 58 && string.charCodeAt(i) <= 64){
			ch=String.fromCharCode((string.charCodeAt(i)+parseInt(num)-58)%7+58);
			str.push(ch);
		} 
//处理A~Z
		if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
			ch=String.fromCharCode((string.charCodeAt(i)+parseInt(num)-65)%26+65);
			str.push(ch);
		}  
//处理[~ `
		if (string.charCodeAt(i) >= 91 && string.charCodeAt(i) <= 96){
			ch=String.fromCharCode((string.charCodeAt(i)+parseInt(num)-91)%6+91);
			str.push(ch);
		}  
//处理a~z
		if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){			
		    ch=String.fromCharCode((string.charCodeAt(i)+parseInt(num)-97)%26+97);
		    str.push(ch);
		} 
//处理{~~
		if (string.charCodeAt(i) >= 123 && string.charCodeAt(i) <= 126){
			ch=String.fromCharCode((string.charCodeAt(i)+parseInt(num)-123)%4+123);
			str.push(ch);
		} 
//处理汉字部分
  		if(string.charCodeAt(i)>255){
			char=escape(string[i]);
	    	console.log(char);
	    	for(var j=0;j<char.length;j++){
				if(char[j]=='%'|| char[j]=='u'){
					ch=char[j];
					str.push(ch);
				}
				else{
					if (char.charCodeAt(j) >= 65 && char.charCodeAt(j) <= 90){
						ch=String.fromCharCode((char.charCodeAt(j)+parseInt(num)-65)%26+65);
						str.push(ch);	
					}
					if (char.charCodeAt(j) >= 48 && char.charCodeAt(j) <= 57){
						ch=String.fromCharCode((char.charCodeAt(j)+parseInt(num)-48)%10+48);
						str.push(ch);			
					}//if
				}//else
	    	}//for
		}//if
	}//for
	console.log(str);
//将密文直接存放在一个不可见的文本框里，使得在解密的时候可以不用手动输入
	document.getElementById("hidtext").value=str;
	console.log(document.getElementById("hidtext").value);
//密文输出前去除%u处理
	for(var i=0;i<str.length;i++){
	    if(str[i]=='%'|| str[i]=='u'){
	    	stringing[i]=i;
			continue;
	    }
	    else
	    	stringing[i]=str[i];
	}//for
//将密文数组转化为密文字符串
	stringing=stringing.join("");
//在密文文本框中输出密文
    document.getElementById("miwen").value=stringing;
}//func
 
function getmiwen() {
//获取密文字符串
   var miwen=document.getElementById("hidtext").value;
  // console.log(miwen);
//密文数组
   var miwenarray=new Array();
   miwenarray=miwen.split(",");
   //console.log(miwenarray);
//密文字符串
   var miwenstring;
   miwenstring=miwenarray.join("");
   //console.log(miwenstring);
//显示密文字符串
   document.getElementById("mingwen").value=miwenstring;

//获取text中的数字
   var num = document.getElementById("yiwei").value;

//明文字符数组
   var mingwenstr=new Array();
// 明文 
   var mingwen=new Array();
//存放临时单个密文字符的变量   
   var ch;

   for(var i=0; i<miwenstring.length;i++){  
   		if(miwenstring[i]=='%' && miwenstring[i+1]=='u'){
	    //处理汉字部分
			var hanzi=new Array();
			for(var count=0;count<6;count++){
				if(miwenstring[i]=='%'|| miwenstring[i]=='u'){
					ch=miwenstring[i];
					hanzi.push(ch);
					i++;
				}
				else{
				//处理0~9
					if (miwenstring.charCodeAt(i) >= 48 && miwenstring.charCodeAt(i) <= 57){
						if(miwenstring.charCodeAt(i)-parseInt(num)<48)	
					    	ch=String.fromCharCode(miwenstring.charCodeAt(i)-parseInt(num)+10);
					    else
					    	ch=String.fromCharCode(miwenstring.charCodeAt(i)-parseInt(num));
						hanzi.push(ch);
					} 
					// //处理A~Z
					if (miwenstring.charCodeAt(i) >= 65 && miwenstring.charCodeAt(i) <= 90){
						if(miwenstring.charCodeAt(i)-parseInt(num)<65)	
					    	ch=String.fromCharCode(miwenstring.charCodeAt(i)-parseInt(num)+26);
					    else
					    	ch=String.fromCharCode(miwenstring.charCodeAt(i)-parseInt(num));
						hanzi.push(ch);
					}  
					i++;
				}//else
				// console.log(i);
                // console.log(hanzi[i-1]);
		    }//for
		    i=i-1;
		    console.log(i);
		    var hanzistr;
            hanzistr=hanzi.join("");
            //console.log(hanzistr);
            hanzistring=unescape(hanzistr);
			console.log(hanzistring);
			mingwen.push(hanzistring);
		}//if
	 	else{
	 		
		 	//处理空格  
				if (miwenstring.charCodeAt(i) == 32){
					ch=String.fromCharCode(miwenstring.charCodeAt(i));
					mingwenstr.push(ch);
				}
			//处理！~ /
				if (miwenstring.charCodeAt(i) >= 33 && miwenstring.charCodeAt(i) <= 47){
					if(miwenstring.charCodeAt(i)-parseInt(num)<33)	
				    	ch=String.fromCharCode(miwenstring.charCodeAt(i)-parseInt(num)+15);
				    else
				    	ch=String.fromCharCode(miwenstring.charCodeAt(i)-parseInt(num));
					mingwenstr.push(ch);		
				} 
			//处理0~9
				if (miwenstring.charCodeAt(i) >= 48 && miwenstring.charCodeAt(i) <= 57){
					if(miwenstring.charCodeAt(i)-parseInt(num)<48)	
				    	ch=String.fromCharCode(miwenstring.charCodeAt(i)-parseInt(num)+10);
				    else
				    	ch=String.fromCharCode(miwenstring.charCodeAt(i)-parseInt(num));
					mingwenstr.push(ch);
				} 
			//处理：~@
				if (miwenstring.charCodeAt(i) >= 58 && miwenstring.charCodeAt(i) <= 64){
					if(miwenstring.charCodeAt(i)-parseInt(num)<58)	
				    	ch=String.fromCharCode(miwenstring.charCodeAt(i)-parseInt(num)+7);
				    else
				    	ch=String.fromCharCode(miwenstring.charCodeAt(i)-parseInt(num));
					mingwenstr.push(ch);
				} 
			//处理A~Z
				if (miwenstring.charCodeAt(i) >= 65 && miwenstring.charCodeAt(i) <= 90){
					if(miwenstring.charCodeAt(i)-parseInt(num)<65)	
				    	ch=String.fromCharCode(miwenstring.charCodeAt(i)-parseInt(num)+26);
				    else
				    	ch=String.fromCharCode(miwenstring.charCodeAt(i)-parseInt(num));
					mingwenstr.push(ch);
				}  
			//处理[~ `
				if (miwenstring.charCodeAt(i) >= 91 && miwenstring.charCodeAt(i) <= 96){
					if(miwenstring.charCodeAt(i)-parseInt(num)<91)	
				    	ch=String.fromCharCode(miwenstring.charCodeAt(i)-parseInt(num)+6);
				    else
				    	ch=String.fromCharCode(miwenstring.charCodeAt(i)-parseInt(num));
					mingwenstr.push(ch);
				}  
			//处理a~z
				if (miwenstring.charCodeAt(i) >= 97 && miwenstring.charCodeAt(i) <= 122){
				
				    if(miwenstring.charCodeAt(i)-parseInt(num)<97)	
				    	ch=String.fromCharCode(miwenstring.charCodeAt(i)-parseInt(num)+26);
				    else
				    	ch=String.fromCharCode(miwenstring.charCodeAt(i)-parseInt(num));	
				    mingwenstr.push(ch);
				} 
			//处理{~~
				if (miwenstring.charCodeAt(i) >= 123 && miwenstring.charCodeAt(i) <= 126){
					if(miwenstring.charCodeAt(i)-parseInt(num)<123)	
				    	ch=String.fromCharCode(miwenstring.charCodeAt(i)-parseInt(num)+4);
				    else
				    	ch=String.fromCharCode(miwenstring.charCodeAt(i)-parseInt(num));
					mingwenstr.push(ch);
				} //if
				//console.log(mingwenstr.pop());
				mingwen.push(mingwenstr.pop());
		}//else	
	}//for
	console.log(mingwen);
	mingwen=mingwen.join("");
	document.getElementById("miwen").value=mingwen;
}//func

function formReset(){
    document.getElementById("myForm").reset();
    document.getElementById("myForm2").reset();
}
