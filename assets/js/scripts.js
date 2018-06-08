
// document ready wrapper tells scripts to wait until DOM has loaded
$(function() {

	// what has been clicked?
	$('.what1').on('click', function(){
		if ($(this).attr('class') === 'what1 show'){
			$(this).css('color', 'rgba(26,13,0,1)').css('fontWeight', '400');
			$(this).addClass('hide');
			$(this).removeClass('show');
			return;
			
		}
		var currentId = $(this).attr('id');
		console.log(currentId);
		$(this).css('color', 'orangered').css('fontWeight', '700');
		$(this).addClass('show');
		$(this).removeClass('hide');
		// $(currentId "> ul").css('display', 'inline');

	// actually if any one what1 div is showing, 
	// ALL other divs needs to be have color and fontweight set to normal
	// should probably have this done by css

	})

});
