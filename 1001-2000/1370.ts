interface SortedFreqMap {
	[char: string]: number;
}

const sortedFrequency = (s: string): SortedFreqMap => {
	const freqMap: SortedFreqMap = {};
	const charArr = [...s].sort((a, b) => (a < b ? -1 : b < a ? 1 : 0));
	for (const n of charArr) {
		if (freqMap[n] !== undefined) {
			freqMap[n]++;
		} else {
			freqMap[n] = 1;
		}
	}
	return freqMap;
};

function* iterateFreqMapForwardAndBackward(
	freqMap: SortedFreqMap,
): Generator<string> {
	const maxCount = Math.max(...Object.values(freqMap));
	for (let i = 0; i < maxCount; i++) {
		const entries = !(i % 2)
			? Object.entries(freqMap)
			: Object.entries(freqMap).reverse();
		for (const [char, count] of entries) {
			if (count) {
				yield char;
				freqMap[char]--;
			}
		}
	}
}

const sortString = (s: string): string => {
	let sortedStr = "";
	for (const char of iterateFreqMapForwardAndBackward(sortedFrequency(s))) {
		sortedStr += char;
	}
	return sortedStr;
};
