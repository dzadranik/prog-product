$(function() {
	$('.jq-menu-button').click(e => {
		$('.jq-top-panel').toggleClass('show')
		$(e.currentTarget).toggleClass('open')
	})

	$(function() {
		$('.rslides').responsiveSlides({
			pager: true,
			nav: true,
			prevText: '', // String: Text for the "previous" button
			nextText: ''
		})
	})
})
