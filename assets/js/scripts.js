
// document ready wrapper tells scripts to wait until DOM has loaded
$(function() {

	$(document).on('click', '.what1', function(){

		var currentId = $(this).attr('id');

		$(this).toggleClass('show');
		$('.what1.show .col2 .what2').slideToggle();

		$('.what1.show').each(function(i){
			if($(this).attr('id') != currentId){
				$(this).toggleClass('show');
			}
		});
	});
});
