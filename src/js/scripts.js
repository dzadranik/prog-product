$(function() {
	$('.crsl-items').carousel({
		visible: 1,
		itemMargin: 5
	})
	$('.jq-menu-button').click(e => {
		$('.jq-top-panel').toggleClass('show')
		$(e.currentTarget).toggleClass('open')
	})
})
