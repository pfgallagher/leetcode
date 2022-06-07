const mostFrequent = (nums: number[], key: number): number => {
	let max = -Infinity;
	const map: { [key: number]: number } = {};
	for (const [i, n] of nums.entries()) {
		const next = nums[i + 1];
		if (next !== undefined && n === key) {
			if (next in map) {
				map[next]++;
			} else {
				map[next] = 1;
			}
			max = Math.max(max, map[next]);
		}
	}
	return parseInt(
		Object.fromEntries(Object.entries(map).map(pair => pair.reverse()))[max],
		10,
	);
};
