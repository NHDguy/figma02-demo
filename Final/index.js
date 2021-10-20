//slider 1
$(document).ready(function() {
	$('.slider-testimonial').slick({
		autoplay: true,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});
//slider news
$(document).ready(function() {
	$('.slider-news').slick({
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
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}	
				}
		]
	});
});	
		