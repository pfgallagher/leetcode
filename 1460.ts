const canBeEqual = (target: number[], arr: number[]): boolean => {
	const nMap: { [n: number]: { targetCount: number; arrCount: number } } = {};
	for (const n of target) {
		if (nMap[n]) {
			nMap[n].targetCount++;
		} else {
			nMap[n] = {
				targetCount: 1,
				arrCount: 0,
			};
		}
	}
	for (const n of arr) {
		if (nMap[n]) {
			nMap[n].arrCount++;
		} else {
			return false;
		}
	}
	for (const { arrCount, targetCount } of Object.values(nMap)) {
		if (arrCount !== targetCount) {
			return false;
		}
	}
	return true;
};
