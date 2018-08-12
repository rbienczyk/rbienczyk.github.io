$(function () {
	"use strict";

	function koniec() {
		console.log("zakonczone");
		$("h3").animate({
				"font-size": "1em",
				"margin-left": "0px",
			},
			2000);
	};

	$("p").hide(2000).show(2000);

	$("h2").click(function () {
		//$(this).fadeOut(3000).fadeIn(2000);
		$(this).slideUp(2000).slideDown(2000);
	})

	$("h3").animate({
			"font-size": "3em",
			"margin-left": "100px",

		},
		2000, koniec).css("color", "blue");
});
