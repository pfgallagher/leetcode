const distinctElements = (arr: string[]): string[] => {
	const elMap: { [key: string]: number } = {};
	for (const el of arr) {
		if (elMap[el]) {
			elMap[el]++;
		} else {
			elMap[el] = 1;
		}
	}
	return Object.keys(elMap).filter(key => elMap[key] === 1);
};

const kthDistinct = (arr: string[], k: number): string =>
	distinctElements(arr)[k - 1] ?? "";
