
// document ready wrapper tells scripts to wait until DOM has loaded
$(function() {

	let currentWhat1;
	let currentWhat2;
	const choices = [];


	// capturing what1 clicks
	$('.what1').on('click', function(){

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
	$('.what2 li').on('click', function(){

		currentWhat2 = $(this).attr('id');

		$('#question').text(currentWhat2);
		
		// #path is text for now, will be links
		$('#path').replaceWith(" Issues > " + currentWhat1);
		// write to an array
		choices.push(currentWhat1, currentWhat2);

		$('.what1').remove();
		// insert what3
		// use replaceWith()??


	});
});
