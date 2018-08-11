function changeBody(event) {
	event.preventDefault();
	document.body.style.backgroundColor = "green";
}

document.getElementsByClassName("link")[2].onclick = function (event) {
	event.preventDefault();
	document.body.className = "rutinoskurwysyn"
}

document.querySelector("h1").addEventListener("mouseenter", function () {
	this.className = "h1-size-XXL";
});

document.querySelector("h1").addEventListener("mouseleave", function () {
	this.className = "";
});

let div = document.getElementById("parSecond");
let p = document.querySelector("#parSecond p");

div.addEventListener("click", function (event) {
	event.stopPropagation();
	console.log("klik div");
});

p.addEventListener("click", function (event) {
	event.stopPropagation();
	console.log("klik p");
});
