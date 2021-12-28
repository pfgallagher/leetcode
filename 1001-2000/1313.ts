function* iterateRLEList(nums: number[]): Generator<[number, number]> {
	for (let i = 0; i < nums.length; i += 2) {
		yield [nums[i], nums[i + 1]];
	}
}

const decompressRLElist = (nums: number[]): number[] => {
	const decompressedList: number[] = [];
	for (const [freq, val] of iterateRLEList(nums)) {
		decompressedList.push(...Array(freq).fill(val));
	}
	return decompressedList;
};
