export {};

const sumDigits = (n: number): number =>
	[...n.toString()].reduce((a, c) => a + parseInt(c, 10), 0);

const getLucky = (s: string, k: number): number => {
	let sum = 0;
	for (const char of s) {
		sum += sumDigits(char.charCodeAt(0) - 96);
	}
	for (let i = 0; i < k - 1; i++) {
		sum = sumDigits(sum);
	}
	return sum;
};
