type FreqMap = { [n: number]: number };

const freqMap = (nums: number[]): FreqMap => {
	const nMap: FreqMap = {};
	for (const n of nums) {
		if (nMap[n]) {
			nMap[n]++;
		} else {
			nMap[n] = 1;
		}
	}
	return nMap;
};

const mostFrequentNums = (nums: number[]): number[] => {
	const nMap = freqMap(nums);
	const mostFrequentCount = Math.max(...Object.values(nMap));
	return Object.entries(nMap)
		.filter(([n, count]) => count === mostFrequentCount)
		.map(([n]) => parseInt(n, 10));
};

const findShortestSubArray = (nums: number[]): number =>
	Math.min(
		...mostFrequentNums(nums).map(
			n => nums.lastIndexOf(n) - nums.indexOf(n) + 1,
		),
	);
