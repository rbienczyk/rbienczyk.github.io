var parSecond = document.getElementById("parSecond");

var newElement = document.createElement("p");

var elementContent = document.createTextNode("Nowy akapit tekstu DOM");

newElement.setAttribute("class", "new-class");

newElement.appendChild(elementContent);

parSecond.appendChild(newElement);



var newPar = document.createElement("p");
newPar.setAttribute("class", "my-class");
newPar.innerHTML = "Kolejny nowy element";
parSecond.appendChild(newPar);


//parSecond.removeChild(newPar);
//
//var par = document.querySelector("#parSecond");
//par.parentElement.removeChild(par);

var span = document.querySelector(".my-span");
span.removeAttribute("class");
