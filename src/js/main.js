$(window).on('load', function() {
	// Loader
	$('.loader').fadeOut(500);
});

$(document).ready(function() {

	// Fullpage js customizing
	new fullpage('#content', {
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		autoScrolling:true,
		scrollHorizontally: true,
		fixedElements: '.header, .footer',
        navigation:true,
        navigationTooltips: ['Home', 'About', 'Achivements', 'Services', 'Our Team', 'Contact'],
        menu: '#menu',
        lockAnchors: true,
	});
});



