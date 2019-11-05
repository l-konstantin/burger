$(document).ready(function() {
	$('.menu-acco_trig').on('click', function(e) {
		e.preventDefault();
		
		var $this = $(this),
			item = $this.closest('.menu-acco_item'),
			list = $this.closest('.menu-acco'),
			items = list.find('.menu-acco_item'),
			content = item.find('.menu-acco_content'),
			otherContent = list.find('.menu-acco_content'),
			duration = 300;
			
			if(!item.hasClass('active')) {
				items.removeClass('active');
				item.addClass('active');
				
				otherContent.stop(true, true).slideUp(duration);
				content.stop(true, true).slideDown(duration);
			} else {
				item.stop(true, true).removeClass('active');
				content.stop(true, true).slideUp(duration);		
			}
	});
});
