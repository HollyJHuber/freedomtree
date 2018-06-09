
// document ready wrapper tells scripts to wait until DOM has loaded
$(function() {

	var currentWhat1;
	var currentWhat2;


	// capturing what1 clicks
	$(document).on('click', '.what1', function(){

		currentWhat1 = $(this).attr('id');

		$(this).toggleClass('expand');

		$('.what1.expand .col2 .what2').slideToggle();

		$('.what1.expand').each(function(i){
			if($(this).attr('id') != currentWhat1){
				$(this).toggleClass('expand');
			}
		});
	});


	// capturing what2 clicks
	$(document).on('click', '.what2 li', function(){

		currentWhat2 = $(this).attr('id');
		
		$('#notation').replaceWith(currentWhat1 + " > " + currentWhat2);
		$('.what1').remove();


	});
});
