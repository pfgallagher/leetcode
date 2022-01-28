const largestAltitude = (gain: number[]): number => {
	let largest = 0;
	let cur = 0;
	for (const netGain of gain) {
		cur += netGain;
		largest = Math.max(largest, cur);
	}
	return largest;
};
