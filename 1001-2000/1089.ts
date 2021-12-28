const duplicateZeros = (arr: number[]): void => {
	const initLength = arr.length;
	for (let i = arr.length - 1; 0 <= i; i--) {
		if (!arr[i]) {
			arr.splice(i, 0, 0);
			while (initLength < arr.length) {
				arr.pop();
			}
		}
	}
	return;
};
