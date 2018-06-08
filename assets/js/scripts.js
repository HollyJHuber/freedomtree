
// document ready wrapper tells scripts to wait until DOM has loaded
$(function() {


// javascript method
	const selectReligion = document.getElementById('religion');
	const selectReligion2 = document.getElementById('religion2');
	selectReligion.onclick = selectIt;

	function selectIt(){
		selectReligion.style.color = "orangered";
		selectReligion.style.fontWeight = "700";

	//jquery methods
		$("#religion2").css("display", "inline").delay(800).fadeIn(1200);
		$(".fa-church").css("color", "orangered");

	}

});
