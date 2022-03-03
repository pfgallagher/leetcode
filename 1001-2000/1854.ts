type LogFreqMap = { [year: string]: number };

const logFrequency = (logs: number[][]): LogFreqMap => {
	const logFreqMap: LogFreqMap = {};
	for (let [start, end] of logs) {
		while (start < end) {
			if (logFreqMap[start]) {
				logFreqMap[start]++;
			} else {
				logFreqMap[start] = 1;
			}
			start++;
		}
	}
	return logFreqMap;
};

const maximumPopulation = (logs: number[][]): number => {
	let maxPop = -Infinity;
	let maxPopYear = -Infinity;
	for (const [year, count] of Object.entries(logFrequency(logs))) {
		if (maxPop < count) {
			maxPop = count;
			maxPopYear = parseInt(year, 10);
		}
	}
	return maxPopYear;
};
