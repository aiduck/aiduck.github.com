/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-03 11:29:10
 * @version $Id$
 */

$(document).ready(function(){
	console.log(1);

	$("button").on('click',function(){
		var ui_grid_row = $('<div></div>').addClass('ui-grid-row');
	    var ui_grid_2 = $('<div></div>').addClass('ui-grid-2');
	    var ui_grid_10 = $('<div></div>').addClass('ui-grid-10');
	    var ui_grid_3 = $('<div></div>').addClass('ui-grid-3').append('Delete');
	    ui_grid_3.on('click', function() {
			removeEle(this);
		});
        ui_grid_row.append(ui_grid_2).append(ui_grid_10).append(ui_grid_3);
		$(".button").before(ui_grid_row);
		reindex();
	});

	$(".ui-grid-3").on('click', function() {
		removeEle(this);
	});
	
	// $(".delete").on('click','.row>ui-grid-row:last-child',function(event){
	// 	console.log(1);

	// 	$(this).parent().remove();
	// 	--count;
	// 	//行编号重新排序
	// 	var i;
	// 	for(i=0; i<count; ++i){
	// 		$(".ui-grid-2").eq(i).html(i+1);
	// 	}
	// });
});

function reindex(){
		$(".ui-grid-2").each(function(index,ele){
			$(ele).text(index+1);
		});
	}
function removeEle(ele){
	$(ele).parent().remove();
	reindex();
}


