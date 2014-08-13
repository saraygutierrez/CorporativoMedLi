$(document).ready(function() {
	var titles = $(".title, .title a"),
		disabled = $("#disable"),
		arrow = $(".content-area .down .arrow a");
	//Hide
	titles.next(".content-area").hide();
	//Open first
	titles.first().attr("id", "active").find("span").text("-").parent().next(".content-area").stop(true, true).slideDown(350);
	//Click the tabs
	titles.not("#disable a").click(function(){
		if($(this).parent(".title").attr("id") != "active") {
			//Open
			$(this).parent(".title").attr("id", "active").find("span").text("-").parent().next(".content-area").slideDown(350);
		} else {
			//Hide
			$(this).parent(".title").removeAttr("id").find("span").text("+").parent().next(".content-area").slideUp(350);
		}
		return false;
	});
	//Hide after click the arrow
	arrow.click(function(){
			$(this).parents(".content-area").slideUp(390).prev("#active").removeAttr("id").find("span").text("+");
		return false;
	});
	//Disable documentation
	if(window.location.protocol != "file:") {
		disabled.css("opacity", 0.5).children().click(function(){
			alert("Documentation of the script will be available when you purchase it");
			return false;
		});	
	}
	
});