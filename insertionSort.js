// insertion sort

function insert(arr, rightIndex, value) {
	let i = rightIndex;
	while (i >= 0 && arr[i] > value) {
		arr[i + 1] = arr[i];
		i -= 1;
	}

	arr[i + 1] = value;
}

function insertionSort(arr) {
	for (var i = 1; i < arr.length - 1; i++) {
		insert(arr, i, arr[i + 1]);
	}
	return arr;
}

console.log(insertionSort([1, 3, 7, 2, 5]));
console.log(insertionSort([9, 6, 7, 5, 4, 3, 2, 1, 666]));
console.log(insertionSort([6, 7, 85, 4, 3, -3, -2, -1]));
