const peakIndexInMountainArray = (arr: number[]): number => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i + 1] < arr[i]) {
			return i;
		}
	}
	return -1;
};
