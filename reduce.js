function reduce(arr, call, acc) {
	for (let i = 0; i < arr.length; i++) {
    acc = call(acc, arr[i]);
  }
}