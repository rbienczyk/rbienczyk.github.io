class Ogloszenia {
	constructor(objOgloszenia) {
		this.ogloszeniaItem = objOgloszenia;
	}

	pobierzOgloszenia() {
		return this.ogloszeniaItem;
	}

	wyswietlOgloszenia() {
		console.log(this.ogloszeniaItem);
	}

	pobierzIDOgloszenia() {
		return this.ogloszeniaItem.id;
	}

	pobierzTytulOgloszenia() {
		return this.ogloszeniaItem.tytul;
	}
}

let o = new Ogloszenia({
	id: 666,
	tytul: "sprzedam opla",
	opis: "niemiec plakal jak sprzedawal",
	kontakt: "666-333-999",
});

console.log(o);

//o.wyswietlOgloszenia();

let id = o.pobierzIDOgloszenia();
console.log(id);
