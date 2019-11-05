$('.burg_menu-btn').on('click', function(e) {
	e.preventDefault();
	$(this).toggleClass('burg_menu-btn_active');
	$('.menu-nav').toggleClass('menu-nav_active');
});