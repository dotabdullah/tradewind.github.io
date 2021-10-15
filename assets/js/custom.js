$(document).ready(function (){
	
	// Carousel Speed Time
//	$('.carousel').carousel({
//	  interval: 3000
//	})
	
	// Language Switcher
	$('ul.lang_btn li').on('click', 'a', function() {
		$('ul.lang_btn li a.active').removeClass('active');
		$(this).addClass('active');
	});
	
	// Navbar Item Active link
	$('ul.navbar-nav li').on('click', 'a', function() {
		$('ul.navbar-nav li a.active').removeClass('active');
		$(this).addClass('active');
	});	
	
	// Services Menu Active link
	$('ul.links_list li').on('click', 'a', function() {
		$('ul.links_list li a.active').removeClass('active');
		$(this).addClass('active');
	});	
	
	// Owl Carousel for Clients
	$('.owl-clients').owlCarousel({
			items: 5,
			loop: true,
			nav: true,
			dots: false,
			autoplay: true,
			autoplayTimeout: 2000,
			merge: true,
			navText: ["<i class='fa fa-arrow-circle-o-left'></i>", "<i class='fa fa-arrow-circle-o-right'></i>"],
			responsive: {
				0: {
					items: 3
				},
				678: {
					items: 3
				},
				1000: {
					items: 5
				}
			}
		});
});
