let arr = ["Dane 1", "Dane 2", "Dane 3", "Dane 4", "Dane 5"];

//for (let i = 0; i < arr.length; i++) {
//	console.log(`index: ${i} | value: ${arr[i]}`);
//}

arr.forEach((elementTablicy, indexTablicy) => {
	console.log(`FOREACH :: index: ${indexTablicy} | value: ${elementTablicy}`);
});

const CONFIG = {
	name: "web",
	data: {
		id: 12345,
		title: "conf title"
	},
	start: "20180805 12:00:00",
}

for (let index in CONFIG) {
	console.log(`index: ${index} | value: ${CONFIG[index]}`);
}

let init = 0;
/*
while (init > 15) {
	console.log(init);
	init++;
}
*/
/*do {
	console.log(init);
} while (init > 15);*/

//for(let i = 0; i < 20; i++){
//	if(i > 9) {
//		break;
//	}

for (let i = 0; i < 20; i++) {
	if (i % 2 == 0) {
		continue;
	}

	console.log(i);
}























