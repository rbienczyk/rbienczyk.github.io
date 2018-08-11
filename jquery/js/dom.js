$(function () {
	"use strict";

	let elementBody = $("body");
	let paragrafy = elementBody.find("p");

	paragrafy.eq(2).css("color", "red");

	$("p").each(function (index) {
		$(this).addClass("klasa-" + index)

		console.log($(this).text());

	});

});
