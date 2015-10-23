$(document).ready(function() {	


	// width of image - width of window 
	var horizontal = $('.hills').width() - $(window).width();
	// height of window(body) + remaining width of image 
	var vertical = $(window).height() + horizontal;
	// sets the body height to the vertical for scrolling
	$('body').css('height', vertical);


	$(window).scroll(function() {
		//determine how many pixels from the top is scrolled
		var px = $(window).scrollTop();
		console.log(px);
		$('.hills').css('left', - px)

	});

});