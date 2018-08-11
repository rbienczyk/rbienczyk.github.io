var wszystkieZgody = document.getElementById("wszystkie-zgody");
var zgodaMarketingowa1 = document.getElementById("zgoda-marketingowa-1");
var zgodaMarketingowa2 = document.getElementById("zgoda-marketingowa-2");
var wyslijBtn = document.getElementById("wyslij");
var inputImie = document.getElementById("name");
var inputEmail = document.getElementById("email");
//var wiadomosc = document.getElementById("wiadomosc");
var error = document.getElementsByClassName("error");

var walidujFormularz = function (event) {

	//clear error info
	for (let i = 0; i < error.length; i++) {
		error[i].innerHTML = "";
	}
	//name input validation
	if (inputImie.value.trim() == "") {
		error[0].innerHTML = "wpisz swoje imie";
		event.preventDefault();
	}
	// email input validation
	if (inputEmail.value.trim() == "" || inputEmail.value.indexOf("@") == -1) {
		error[1].innerHTML = "zly mail";
		event.preventDefault();
	}
	//first checbox valid
	if (!zgodaMarketingowa1.checked) {
		error[2].innerHTML = "zgode zaznacz";
		event.preventDefault();
	}
};

var zaznaczWszystkie = function () {
	zgodaMarketingowa1.checked = this.checked;
	zgodaMarketingowa2.checked = this.checked;

	zgodaMarketingowa1.disabled = this.checked;
	zgodaMarketingowa2.disabled = this.checked;
}

wyslijBtn.addEventListener("click", walidujFormularz);

wszystkieZgody.addEventListener("change", zaznaczWszystkie);
