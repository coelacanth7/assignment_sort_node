//

function merge(leftArr, rightArr) {
	let newArr = [];
	let indexLeft = 0;
	let indexRight = 0;

	while (indexLeft < leftArr.length && indexRight < rightArr.length) {
		if (leftArr[indexLeft] < rightArr[indexRight]) {
			newArr.push(leftArr[indexLeft]);
			indexLeft++;
		} else {
			newArr.push(rightArr[indexRight]);
			indexRight++;
		}
	}

	return newArr
		.concat(leftArr.slice(indexLeft))
		.concat(rightArr.slice(indexRight));
}

function mergeSort(arr) {
	if (arr.length === 1) return arr;

	return merge(
		mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
		mergeSort(arr.slice(Math.floor(arr.length / 2)))
	);
}

module.exports = mergeSort;

console.log(mergeSort([1, 3, 7, 2, 5]));
console.log(mergeSort([9, 6, 7, 5, 4, 3, 2, 1, 666]));
console.log(mergeSort([6, 7, 85, 4, 3, -3, -2, -1]));
