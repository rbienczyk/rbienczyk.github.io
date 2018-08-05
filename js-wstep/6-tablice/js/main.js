let imiona = ["Paweł", "Łukasz", "Agata", "Radek", "Paweł"];
//console.log(imiona[3]);

//dodawanie na koniec
imiona.push("Tomasz", "Ela", "Zbyszek");

//dodawanie na poczatek
imiona.unshift("Grzesiek");

//kasowanie na koncu
imiona.pop();

//kasowanie na poczatku
imiona.shift();

//lenght wyswietli ilosc elementow
//console.log(imiona.length);

let arrayString = imiona.join("===");

console.log(arrayString);

let arrayReverse = imiona.reverse();

console.log(arrayReverse);

let arraySort = imiona.sort();

console.log(arraySort);
