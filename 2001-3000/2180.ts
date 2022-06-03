const digitSum = (num: number): number =>
	[...num.toString()]
		.map(nStr => Number.parseInt(nStr, 10))
		.reduce((a, c) => a + c, 0);

const countEven = (num: number): number => {
	let count = 0;
	for (let i = 2; i <= num; i++) {
		if (!(digitSum(i) % 2)) {
			count++;
		}
	}
	return count;
};
