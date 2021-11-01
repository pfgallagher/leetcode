const findPeak = (arr: number[], rev = false): number => {
	if (rev) {
		arr.reverse();
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i + 1] <= arr[i]) {
			return rev ? arr.length - i - 1 : i;
		}
	}
	return -1;
};

const validMountainArray = (arr: number[]): boolean =>
	3 <= arr.length && findPeak(arr) === findPeak(arr, true);
