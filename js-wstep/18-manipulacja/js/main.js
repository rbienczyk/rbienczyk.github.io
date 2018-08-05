var parFirst = document.getElementById("parFirst");

var parFirstHTML = parFirst.innerHTML;

//console.log(parFirstHTML);

parFirst.innerHTML = "<button>przycisk</button>";

var firstLink = document.querySelectorAll("a")[0];
firstLink.href = "https://www.iforbet.pl";
firstLink.className = "superduper";
firstLink.style.backgroundColor = "red";
firstLink.style.color = "#111";
console.log(firstLink);
