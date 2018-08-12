"use strict";

$(function () {

	let formi = $("#formi");

	let cenaPiz = $("#cena");
	//console.log(cenaPiz);

	let pizza = $("#foodie");
	//console.log(pizza);

	formi.submit(function () {
		//console.log("wysylam form");
		return false;
	});

	pizza.change(function () {
		let wybranaPizza = $(this).val();
		//console.log($(this).val());

		let ceny = [
			{id: 1, nazwa: "hawajska", cena: 20},
			{id: 2, nazwa: "piekielna", cena: 30},
			{id: 3, nazwa: "szynka", cena: 40},
			{id: 4, nazwa: "warzywka", cena: 50},
			{id: 5, nazwa: "szatanska", cena: 60},
		];

		ceny.forEach(function (element) {
			if (wybranaPizza == element.id) {
				//console.log(element.cena);
				//$("span#cena").html("<span>PLN</span>")
				cenaPiz.text(element.cena + " PLN");
			}

		});

	});

});
