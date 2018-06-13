
// document ready wrapper tells scripts to wait until DOM has loaded
$(function() {

	let currentWhat1;
	let currentWhat2;
	const choices = [];
	
	var template = <h4>RISE UP</h4>;
	var appRoot=document.getElementById('app');

	ReactDOM.render(template,appRoot);

	// capturing what1 click, display what2 content
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


	// capturing what2 click, display what3 content
	$('.what2 li').on('click', function(){

		currentWhat2 = $(this).attr('id');

		$('#question').text(currentWhat2);
		
		// #path is text for now, will be links
		$('#path').text(" Issues > " + currentWhat1);

		// write to an array
		choices.push(currentWhat1, currentWhat2);

		$('.what1').remove();

		if (currentWhat1=="Religion"){
			//insert prayer text
			what3Text = [	'I do not wish to participate in prayer.',
							'I am not being allowed to pray.',
							'I am being forced to pray.',
							'I am being forced to listen silently to prayer.',
							'I am required to be present while others pray.',
							'Other'];

		} else {
			//insert pledge text
			what3Text = [	'I do not wish to participate.',
							'I am being forced to recite.',
							'I am being forced to stand.',
							'I am being treated unfairly for not participating.',
							'I do not wish to say "Under God”.',
							'Other'];
		}

		what3Text.forEach(function(value){
			let newWhat3 = '<div class="what3"><div class="listing">' + value + '</div></div>';
			$("#instruction").append(newWhat3)
		});
	});

	// capturing what3 click, display what3 content
});
