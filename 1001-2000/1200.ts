const minimumAbsDifference = (arr: number[]): number[][] => {
	let pairs: number[][] = [];
	let minDiff = Infinity;
	arr.sort((a, b) => a - b);
	for (let i = 0; i < arr.length - 1; i++) {
		const curDiff = arr[i + 1] - arr[i];
		if (curDiff < minDiff) {
			minDiff = curDiff;
			pairs = [];
		}
		if (curDiff === minDiff) {
			pairs.push([arr[i], arr[i + 1]]);
		}
	}
	return pairs;
};
