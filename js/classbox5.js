/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-03 11:29:10
 * @version $Id$
 */
$(init)

function init {
	$(ui-grid-4).eq(0).on('click',function{
		$(ui-grid-4).eq(1).text("hello");
	});
}



