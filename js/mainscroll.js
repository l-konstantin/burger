const sections = $('.section');
const display = $('.maincontent');
let inscroll = false;

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const performTransition = sectionEq => {
	if(inscroll) return;
		inscroll = true;
		const position = `${sectioneq * -100}%`;
	
		section
		.eq(sectionEq)
		.assClass('active')
		.sublings()
		.removeClass('active');
	
		setTimeout(() => {
			inscroll = false;
		}, 1300);
		display.css ({
		'transform' : `translateY(${position})`	
		});
}
const defineSection = sections => {
	const activeSection = section.filter('.active');
	return {
		activeSection: activeSection,
		nextSection: activeSection.next(),
		prevSection: activeSection.prev()
	}
}

const scrollToSection = direction => {
	const section = defineSection(sections);
	
	if(direction === "up" && section.nextSection.length){
		performTransition(sections.prevSection.index());
	}
	
	if(direction === 'up'){
		performTransition(section.nextSection.index());
	}
	if(direction === 'down'){
		performTransition(section.prevSection.index());
	}
};

$('.wrapper').on({
	wheel: e => {
	const deltaY = e.originalEvent.deltaY;
	
	const direction = (deltaY > 0) ? "up" : "down";
		scrollToSection(direction);
	},
	touchMove: e => (e.preventDefault())
});

$(document).on('keydown', e => {
	
	switch(e.keyCode) {
		case 40:
			scrollToSection('up');
		break;
		case 38: 
			scrollToSection('down');
		break;
	}
});

$('[data-scroll-to]').on('click', e => {
	e.preventDefault();
	const sectionNum = $(e.currentTarget).attr('data-scroll-to');
	performTransition();
});

if(ismobile) {
	$(window).swipe({
		swipe: function(event, direction){
			scrollToSection(direction);
		}
	});
}