const longestPalindrome = (s: string): number => {
	const count: number[] = Array(128).fill(0);
	[...s].forEach(char => {
		count[char.charCodeAt(0)]++;
	});
	let total = 0;
	count.forEach(n => {
		total += Math.floor(n / 2) * 2;
		if (total % 2 === 0 && n % 2 === 1) {
			total++;
		}
	});
	return total;
};
