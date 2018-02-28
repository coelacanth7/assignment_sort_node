//

function merge(leftArr, rightArr) {
	let newArr = [];

	while (leftArr.length && rightArr.length) {
		if (leftArr[0] < rightArr[0]) {
			newArr.push(leftArr.shift());
		} else {
			newArr.push(rightArr.shift());
		}
	}

	return newArr.concat(leftArr, rightArr);
}

function mergeSort(arr) {
	if (arr.length === 1) return arr;

	return merge(
		mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
		mergeSort(arr.slice(Math.floor(arr.length / 2)))
	);
}

console.log(mergeSort([1, 3, 7, 2, 5]));
console.log(mergeSort([9, 6, 7, 5, 4, 3, 2, 1, 666]));
console.log(mergeSort([6, 7, 85, 4, 3, -3, -2, -1]));
