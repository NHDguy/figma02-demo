//slider news
$(document).ready(function() {
	$('.slider-articles').slick({
		autoplay: true,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}	
				}
		]
	});
});	