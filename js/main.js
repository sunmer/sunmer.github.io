$(document).ready(function() {
	var hasMore = false;

	$('.showMore').click(function(e) {
		e.preventDefault();
		
		$('.more').toggle();

		if($('.more').is(':visible')) {
			$('.showMore').text('Less..');
		} else {
			$('.showMore').text('More..');
		}
		
	});
});