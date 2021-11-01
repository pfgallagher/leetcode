export {};

const sum = (nums: number[]): number => nums.reduce((a, c) => a + c, 0);

const numberOfLines = (widths: number[], s: string): number[] => {
	const lines = [...s]
		.map(char => widths[char.charCodeAt(0) - 97])
		.reduce(
			(acc, cur) => {
				if (sum(acc[acc.length - 1]) + cur <= 100) {
					acc[acc.length - 1].push(cur);
				} else {
					acc.push([cur]);
				}
				return acc;
			},
			[[]] as number[][],
		);
	return [lines.length, sum(lines[lines.length - 1])];
};
