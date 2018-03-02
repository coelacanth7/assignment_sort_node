//

function bubbleSort(arr) {
	let swapped, temp;

	do {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);

	return arr;
}

module.exports = bubbleSort;
// console.log(bubbleSort([1, 3, 7, 2, 5]));
// console.log(bubbleSort([9, 6, 7, 5, 4, 3, 2, 1, 666]));
// console.log(bubbleSort([6, 7, 85, 4, 3, -3, -2, -1]));
