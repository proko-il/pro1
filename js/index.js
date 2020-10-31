$(document).ready(function(){

	$(document).mousemove(function(e){

		var mouseX =e.pageX;
		var mouseY =e.pageY;

	
		$(".m").css({
			left:mouseX+"px",
			top:mouseY+"px",
		})
	})
})

