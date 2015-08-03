jQuery(function($) {'use strict',

	//Header Slider
	$(function(){
		$('#headerSlider.carousel').carousel({
			interval: 8000
		});
	});

	//Initialize WOW JS
	new WOW().init();

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

});