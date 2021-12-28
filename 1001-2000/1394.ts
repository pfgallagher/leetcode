export {};

const frequency = (arr: number[]): Map<number, number> => {
	const freqMap = new Map<number,number>();
	for (const n of arr) {
		freqMap.set(n, freqMap.has(n) ? freqMap.get(n)! + 1 : 1)
	};
	return freqMap;
};

const findLucky = (arr: number[]): number => {
	let largestLuckyNum = -1;
	for (const [n, count] of frequency(arr).entries()) {
		if (n === count) {
			largestLuckyNum = Math.max(largestLuckyNum, n);
		}
	}
	return largestLuckyNum;
}
