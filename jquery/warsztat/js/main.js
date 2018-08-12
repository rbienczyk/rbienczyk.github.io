"use strict";

$(function () {

	let formi = $("#formi");
	
	let name = $("#name");

	let surname = $("#surname");
	
	let street = $("#street");
	
	let hnum = $("#hnum");
	
	let post = $("#post");
	
	let city = $("#city");

	let cenaPiz = $("#cena");

	let pizza = $("#foodie");

	formi.submit(function () {
		
		if (name.val().trim() === "") {
			console.log("imie dupa");
		}
		
		if (surname.val().trim() === "") {
			console.log("nazwisko dupa");
		}
		
		if (street.val().trim() === "") {
				console.log("ulica dupa");
		}
		
		if (hnum.val().trim() === "") {
			console.log("numer domu dupa");
		}
		
		if (post.val().trim() === "") {
			console.log("kod dupa");
		}
		
		if (city.val().trim() === "") {
			console.log("miasto dupa");
		}
	
		if ($("#foodie option:selected").val() == "0") {
			//console.log($("#foodie option:selected").val());
			console.log("alarm");
		}
		
		
		
		return false;
		
	});

	pizza.change(function () {
		let wybranaPizza = $(this).val();

		let ceny = [
			{id: 1, nazwa: "hawajska", cena: 20},
			{id: 2, nazwa: "piekielna", cena: 30},
			{id: 3, nazwa: "szynka", cena: 40},
			{id: 4, nazwa: "warzywka", cena: 50},
			{id: 5, nazwa: "szatanska", cena: 60},
		];

		ceny.forEach(function (element) {
			if (wybranaPizza == element.id) {
				cenaPiz.text(element.cena + " PLN");
			}

		});

	});

});