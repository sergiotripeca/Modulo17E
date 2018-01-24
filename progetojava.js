$(document).ready(function(){
	$("#link_p").click(function(){
		$(".port").css("background-color", "red");
	});

	$("#p_y").click(function(){
		$(this).prev().css("background-color", "green");
		$(this).css("background-color", "yellow");
	});
	$("#link_r").click(function(){
		$("#parent_r").children().css("background-color","blue");
		$(".r").last().css("background-color","red");
				
	});
	$("#r_r").click(function(){
		$(this).next().css("background-color","yellow");
		
	});
	$("#link_n").click(function(){
		$("#white").css("background-color","white");
	});
	$("#parent_n").click(function(){
		$(this).children().not("#white").css("background-color", "green");
		$(this).children().last("#white").css("background-color", "green");
		
		
		
	});

});