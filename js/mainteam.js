$(document).ready(function() {
	$('.acco_trig').on('click', function(e) {
		e.preventDefault();
		
		var $this = $(this),
			item = $this.closest('.acco_item'),
			list = $this.closest('.team_acco'),
			items = list.find('.acco_item'),
			content = item.find('.team-acco_content'),
			otherContent = list.find('.team-acco_content'),
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
$(function (){

	$('.acco_item a').each(function(){
		var path = window.location.href;
		var current = path.substring(path.lastIndexOf('/')+1);
		var url = $(this).attr('href');

		if(url == current){
			$(this).addClass('active');
		}
	});
});