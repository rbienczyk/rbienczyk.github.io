let tytul = "java script dla poczatkujacych";
let autor = "kirupa";

function wyswietlDane() {
	console.log(tytul, autor);
}


wyswietlDane();


var wyswietlKsiazke = function (t, a) {
	console.log(t, a);
}

wyswietlKsiazke('ksiazka', 'pisarz');

wyswietlKsiazke('inna', 'innosc');

wyswietlKsiazke('raz', 'dwa');

function obliczProcent(kwota, procent) {
	let wynik = kwota * (procent / 100);
	return wynik;
}

let pobierzProcent = obliczProcent(1000, 10);
console.log(pobierzProcent);



var obliczProc = (kwota, procent) => {
	let wyn = kwota * (procent / 100);
	return wyn;
}

let pobierzProc = obliczProc(100, 10);
console.log(pobierzProc);
