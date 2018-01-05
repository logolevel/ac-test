$(function() {

	/* toggle menu */
	$('#toggleMenu').click(function(){
		$('.main-menu').toggleClass('active');
		$('.nav-icon').toggleClass('active');
	});

	/* init owl-carousel */
	$(".owl-carousel").owlCarousel({
		items: 4,
		margin: 10,
		loop: true,
		nav: true,
		navText: '', 
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			800:{
				items:3,
				nav:true
			},
			960:{
				items:4,
				nav:true
			}
		}
	});

});
