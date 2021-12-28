const kLengthApart = (nums: number[], k: number): boolean => {
	let count = k;
	for (const n of nums) {
		if (n) {
			if (count < k) {
				return false;
			}
			count = 0;
		} else {
			count++;
		}
	}
	return true;
};
