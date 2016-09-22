$(document).ready(function(){
	//alert("Hello jQuery!");

	$("#hide").click(function(){
		$("#image").hide();
	});

	$("#show").click(function(){
		$("#image").show();
	});

	$("#fadeIn").click(function(){
		$("#image").fadeIn(5000);
	});

	$("#explode").click(function(){
		$("#image").hide("explode", {pieces: 100 }, 5000);
	});

	$("#slideUp").click(function(){
		$("#image").slideUp(2000);
	});

	$("#bounce").click(function(){
		$("#image").hide("bounce", {times: 4 }, "slow");
	});

});

