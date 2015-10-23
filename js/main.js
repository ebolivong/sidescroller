$(document).ready(function() {	

	var horizontal = $('.hills').width() - $(window).width();
	var vertical = $(window).height() + horizontal;
	$('body').css('height', vertical);
	// console.log(px);

	// height of window(body) + remaining width of image 
	// width of image - width of window 


});