let auto = {
	marka: "BMW",
	model: "X3",
	rocznik: 2003,
	silnik: 2.5,
	uruchom: function () {
		console.log("brum brum");
	},
	przedstawSie() {
		let name = `Nazywam sie ${this.marka} ${this.model}`;
		console.log(name);
	}
};

console.log(auto.silnik, auto['rocznik']);

auto.uruchom();

auto['przedstawSie']();
