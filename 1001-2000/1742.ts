const sumDigits = (n: number): number =>
	[...n.toString()].reduce((a, c) => a + parseInt(c, 10), 0);

const countBalls = (lowLimit: number, highLimit: number): number => {
	const ballMap: { [boxNumber: number]: number } = {};
	let maxCount = -Infinity;
	while (lowLimit <= highLimit) {
		const boxNumber = sumDigits(lowLimit);
		if (ballMap.hasOwnProperty(boxNumber)) {
			ballMap[boxNumber]++;
		} else {
			ballMap[boxNumber] = 1;
		}
		maxCount = Math.max(maxCount, ballMap[boxNumber]);
		lowLimit++;
	}
	return maxCount;
};
