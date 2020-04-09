$(function() {
	$('.jq-menu-button').click(e => {
		$('.jq-top-panel').toggleClass('show')
		$('body').toggleClass('no-scroll')
		$(e.currentTarget).toggleClass('open')
	})

	$(function() {
		$('.rslides').responsiveSlides({
			pager: true,
			nav: true,
			prevText: '',
			nextText: ''
		})
	})
})
