const decimalsToBinary = (a: number, b: number): [string, string] => {
	const aBin = a.toString(2);
	const bBin = b.toString(2);
	const longest = Math.max(aBin.length, bBin.length);
	return [aBin.padStart(longest, "0"), bBin.padStart(longest, "0")];
};

const minBitFlips = (start: number, goal: number): number => {
	const [startBin, goalBin] = decimalsToBinary(start, goal);
	let minFlips = 0;
	for (let i = 0; i < startBin.length; i++) {
		if (startBin[i] !== goalBin[i]) {
			minFlips++;
		}
	}
	return minFlips;
};
