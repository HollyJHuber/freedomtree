
// document ready wrapper tells scripts to wait until DOM has loaded
$(function() {

	// display item that has been clicked
	$('.what1').on('click', function(){
		// this IF really isn't important because showing 1 should hide others
		// change code to do that!
		if ($(this).attr('class') === 'what1 show'){
			$(this).addClass('hide');
			$(this).removeClass('show');
			return;
			
		}
		var currentId = $(this).attr('id');
		console.log(currentId);

		$(this).addClass('show');
		$(this).removeClass('hide');
		// $(".what1.show .col2 .what2").css('display', 'block');
		$('.what1.show .col2 .what2').show();

	// actually if any one what1 div is showing, 
	// ALL other divs needs to be have color and fontweight set to normal
	// and all subitems hidden
	// should probably have this done by css

	})

});
