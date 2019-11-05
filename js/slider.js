$(document).ready(function(){
	$('.next').click(function(){
		var currentImage = $('.burger-image-text.curry');
		var currentImageIndex = $('.burger-image-text.curry').index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $('.burger-image-text').eq(nextImageIndex);
		currentImage.fadeOut(1000);
		currentImage.removeClass('curry');
		
		if(nextImageIndex == ($('.burger-image-text:last').index()+1)){
			$('.burger-image-text').eq(0).fadeIn(1000);
			$('.burger-image-text').eq(0).addClass('curry');
			} else {
				nextImage.fadeIn(1000);
				nextImage.addClass('curry');
			}
	});
	
	$('.prev').click(function(){
		var currentImage = $('.burger-image-text.curry');
		var currentImageIndex = $('.burger-image-text.curry').index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $('.burger-image-text').eq(prevImageIndex);
		
		currentImage.fadeOut(1000);
		currentImage.removeClass('curry');
		prevImage.fadeIn(1000);
		prevImage.addClass('curry');
	});
});