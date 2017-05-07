var map=new BMap.Map("mymap");
//西湖坐标点
var point = new BMap.Point(120.152063,30.247993);
//地图初始化
map.centerAndZoom(point, 15);   
//图标
var marker = new BMap.Marker(point); 
map.addOverlay(marker);

//控件
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl()); 
map.setCurrentCity('杭州市');
//鼠标滚动
map.enableScrollWheelZoom();
//新模式
map.setMapStyle({style:'light'});



//創建自己的覆盖物
//div  
function ZoomControldiv(){      
    this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;    
    this.defaultOffset = new BMap.Size(100, 40);  
}      
ZoomControldiv.prototype = new BMap.Control();  
ZoomControldiv.prototype.initialize = function(map){    
    var div = document.createElement("div");    
    div.id="text";
    var str="<div style=‘background:#1868bd;color:#fff; ‘>"
        +"<input type='text' value='宾馆,西湖景区' style=‘background:#1868bd;width:200px;height:20px;color:lightgray;text-indent:10px;‘ />"+"<i class='fa fa-search fa-lg' aria-hidden='true' display='inline-block' style='margin-left:-35px;padding:6px;border-left:1px solid lightgray;color:blue;'>"+"</i></div>"
    div.innerHTML = str;
    div.style.cursor = "pointer";
    div.style.display="block"; 
    div.onclick  = function(e){  
        
        var x = document.getElementById("results");
        
        if($("#results").css("display")=="none"){//如果是隐藏的
            $("#results").css("display","block");//display属性设置为block（显示）
            $("#text").css("display","none");
        }else{
            $("#results").css("display","none");
            $("#text").css("display","block");
        } 
    }    
    map.getContainer().appendChild(div);    
    return div;    
 }
var myZoomCtrldiv = new ZoomControldiv();
map.addControl(myZoomCtrldiv); 

//先创建id为results的div
openUserInfoDiv();

//显示西湖附近的宾馆
var local = new BMap.LocalSearch(map, {
    renderOptions: {
        map: map,
        panel: 'results',
        autoViewport: true
    }
});
local.searchNearby('宾馆', '西湖景区');

//覆盖物上显示的内容
function openUserInfoDiv(){
    var newDiv = document.createElement("div");
    newDiv.id = "results";
    newDiv.style.position = "absolute";
    newDiv.style.zIndex = "9999";
    
    newDiv.style.width ="300px";
    newDiv.style.top = "0px";
    newDiv.style.right = "0px";

    newDiv.style.background = "#ffffff";
    newDiv.style.opacity = "0.9";
    newDiv.style.padding = "5px";
    newDiv.style.display="none";          //隐藏
    newDiv.onclick = function(e){  
        
    }
    document.getElementById("mymap").appendChild(newDiv);
}


//查询公交线路
openUserInfotransit();
var transit = new BMap.TransitRoute(map, {
    renderOptions: {
        map: map,
        panel:"route"
    }
});
local.setMarkersSetCallback(function(pois){
    console.log(2);
    //console.log(pois);
    for (var i = 0; i < pois.length; i++) {
        pois[i].marker.addEventListener("click", function(e) {
            //console.log(this);
            transit.search("杭州师范大学-东南门", this.z.title);
            $("#route").css("display","block");
            //重新绘制前清楚使用
            transit.clearResults();  
        })
    }
})
//覆盖物上显示的内容
function openUserInfotransit(){
    console.log(1);
    var newDiv = document.createElement("div");
    newDiv.id = "route";
    newDiv.style.position = "absolute";
    newDiv.style.zIndex = "9999";
    
    newDiv.style.height ="100px";
    newDiv.style.width ="20%";
    newDiv.style.top = "0px";
    newDiv.style.left = "0px";

    newDiv.style.background = "#ffffff";
    newDiv.style.opacity = "0.9";
    newDiv.style.padding = "5px";
    newDiv.style.display="none";          //隐藏
    newDiv.dblclick= function(e){  
    }
    document.getElementById("mymap").appendChild(newDiv);
}


//map事件
 map.addEventListener("rightclick", function(){
        $("#route").css("display","none");
        $("#results").css("display","none");
        $("#text").css("display","block");
 });


var school_info=[
  [120.016976,30.295394,"博文苑1号楼便利超市"],
  [120.015413,30.295005,"博文苑4号楼萌站"],
  [120.017012,30.295566,"博文苑5号楼晨光文具&水果超市&电脑维修"],
  [120.016239,30.295862,"博文苑6号楼仓前图文制作部&菜鸟驿站"],
  [120.014748,30.295831,"博文苑7号楼便利超市&医务室"],
  [120.015745,30.296533,"博文苑9号楼学生事务服务中心"],
  [120.013208,30.29502,"田径场"],
  [120.015355,30.295605,"足球场"],
  [120.019406,30.295297,"恕园7号楼彩色玻璃房110服务中心"],
  [120.016945,30.297671,"恕园36号楼图书馆"],
  [120.019127,30.296423,"恕园13号楼一鸣奶吧"],
  [120.02065,30.297554,"恕园16号楼实验楼"],
  [120.01827,30.297499,"恕园23号楼人文学院"],
  [120.019743,30.297148,"恕园17号楼法学院"],
  [120.019527,30.297417,"恕园21号楼经济与管理学院"],
  [120.019976,30.294841,"恕园1号楼阿里巴巴商学院"],
  [120.016527,30.293952,"恕园6号楼经亨颐学院"]
];


var opts = {
  width: 200, // 信息窗口宽度    
  height: 150, // 信息窗口高度      
}

function schoolmarker(){
	for(var i = 0;i < school_info.length;i++){
	    var point= new BMap.Marker(new BMap.Point(school_info[i][0],school_info[i][1]));
	    var address = school_info[i][2];
	    map.addOverlay(point);
	    choose_building(address,point);
    }
}

function choose_building(address,point){
//    console.log(point);
	point.addEventListener("click",function(e){
        //p=point
        var p = e.target;
//        console.log(4);
//        console.log(p);
        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        var div=document.createElement("div");
        div.style.width="200px";
        div.style.height="150px";
        div.style.border = "0px solid rgba(0,0,0,0)";
        div.style.fontSize="12px";
        div.style.color="lightgray";
        
        var img = document.createElement("img");
        //真正实现的时候可以用对应目标的address来定位图片库
        i=Math.ceil(Math.random()*13);
        var imgpos = "img/map/"+i+".jpg";
        console.log(imgpos);
        img.style.width="300px";
        img.style.height="120px";
        img.setAttribute("src",imgpos);
        div.append(img);
        
        var span = document.createElement("span");
        span.innerHTML=address;
        span.style.fontSize="14px";
        span.style.color="black";
        console.log(span);
        console.log(address);
        div.append(span);
        
//        var www= "杭师大欢迎你";
//        var a = document.createElement("a");
//        console.log(a);
//        a.setAttribute("href","http://www.hznu.edu.cn/");
//        a.setAttribute("target","_blank");
//        span.innerHTML=www;
////        a.style.link="#0000ff";
////        a.style.position="absolute";
////        a.style.float="right";
//        div.append(a);
    var infoWindow = new BMap.InfoWindow(div,opts);
        map.openInfoWindow(infoWindow,point);
	});
}

schoolmarker();











//    // 定义一个控件类,即function
//    //text
//    function zoomControltext(){
//      // 默认停靠位置和偏移量
//      this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
//      this.defaultOffset = new BMap.Size(150, 50); // 距离左上角位置
//    }
//
//    // 通过JavaScript的prototype属性继承于BMap.Control
//    zoomControltext.prototype = new BMap.Control();
//    
//    // 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
//    // 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
//    zoomControltext.prototype.initialize = function(map){
//      // 创建一个DOM元素
//      var text = document.createElement("input");
//      // 设置样式
//        text.setAttribute('type', 'text');
//        text.id="search-text";
//        text.style.width="300px";
//        text.style.height="25px";
//        text.style.border="solid 0px rgba(0,0,0,0)";
//        text.style.borderRadius="2px";
//        text.style.boxShadow="1px 2px 1px 1px gray";
//        text.style.fontSize="14px";
//        text.style.textIndent="10px";
//        text.style.color="lightgray";
//        text.value="餐馆，住宿" ; 
//        
//      // 绑定事件
//      text.onclick = function(e){
//          text.value="";
//          
//      }
//      // 添加DOM元素到地图中
//      map.getContainer().appendChild(text);
//      // 将DOM元素返回
//      return text;
//    }
//    // 创建控件
//    var myZoomCtrltext = new zoomControltext();
//    // 添加到地图当中
//    map.addControl(myZoomCtrltext);
//
//
//
//
// //button
//    function zoomControlbutton(){
//      // 默认停靠位置和偏移量
//      this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
//      this.defaultOffset = new BMap.Size(455, 53); // 距离左上角位置
//    }
//
//    // 通过JavaScript的prototype属性继承于BMap.Control
//    zoomControlbutton.prototype = new BMap.Control();
//    
//    // 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
//    // 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
//    zoomControlbutton.prototype.initialize = function(map){
//      // 创建一个DOM元素
//      var button = document.createElement("input");
//      // 设置样式
//        button.setAttribute('type', 'button');
//        button.style.width="40px";
//        button.style.height="27px";
//        button.style.marginLeft="-7px";
//        button.style.marginTop="-3px";
//        button.style.backgroundColor="#0095cd";
//        button.style.background="-webkit-gradient(linear, left top, left bottom, from(#00adee), to(#0078a5))";
//        button.style.border="solid 0px rgba(0,0,0,0)";
//        button.style.borderRadius="0 2px 2px 0";
//        button.style.boxShadow="1px 2px 1px 1px gray";
//        
//      // 绑定事件
//      button.onclick = function(e){
//            
//          
//      }
//      // 添加DOM元素到地图中
//      map.getContainer().appendChild(button);
//      // 将DOM元素返回
//      return button;
//    }
//    // 创建控件
//    var myZoomCtrlbutton = new zoomControlbutton();
//    // 添加到地图当中
//    map.addControl(myZoomCtrlbutton);
//
//
//
//
//
//
//