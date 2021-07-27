const addToArrayForm = (num: number[], k: number): number[] =>
	[...(BigInt(num.join("")) + BigInt(k)).toString()].map(d => parseInt(d, 10));
