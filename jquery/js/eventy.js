$(function () {
	"uste strict";

	$("p").click(function () {
		$(this).css("color", "orange");
	})

	$("h1").on({
		"click": function () {
			$(this).css("color", "orange");
		},
		"dbclick": function () {
			$(this).css("color", "red");
		},
		"mouseleave": function () {
			$(this).css("color", "green");
		}
	})

	$("p").on({
		"mouseenter": function () {
			$(this).css("color", "red");
		},
		"mouseleave": function () {
			$(this).css("color", "lime");
		}
	})

});
