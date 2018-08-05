var zmiennaGlobalna = 'jeden dwa trzy';

console.log(zmiennaGlobalna);

function print() {
	console.log(zmiennaGlobalna);

	var zmiennaLokalna = 'TRZY DWA RAZ zmienna lokalna';

	console.log(zmiennaLokalna);

}

print();

//console.log(zmiennaLokalna);

var liczba = 14;
var print2 = () => {
	var liczba = 145;
}

print2();
console.log(liczba);

var myFunction = () => {
	let myVar = 150;

	if (true) {
		let myVar = 180;
	}
	console.log(myVar);
}

myFunction();
