const insertionSort = require("./insertionSort");
const bubbleSort = require("./bubbleSort");
const mergeSort = require("./mergeSort");

function benchmarks(arr) {
	console.log("benchmarking insertionSort");
	let start = new Date();
	for (var i = 0; i < 1000; i++) {
		insertionSort(arr);
	}
	let end = new Date();
	console.log(`insertionSort took ${end - start} ms`);

	console.log("==================");

	console.log("benchmarking bubbleSort");
	start = new Date();
	for (var i = 0; i < 1000; i++) {
		bubbleSort(arr);
	}
	end = new Date();
	console.log(`bubbleSort took ${end - start} ms`);

	console.log("==================");

	console.log("benchmarking mergeSort");
	start = new Date();
	for (var i = 0; i < 1000; i++) {
		mergeSort(arr);
	}
	end = new Date();
	console.log(`mergeSort took ${end - start} ms`);
}

//small array
// benchmarks([1, 3, 7, 2, 5]);

// longArr;
let longArr = [];
for (var i = 0; i < 10000; i++) {
	longArr.push(Math.floor(Math.random() * Math.floor(200000)));
}
benchmarks(longArr);
