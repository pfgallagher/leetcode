const hammingWeight = (n: number): number =>
	[...n.toString(2)].map(dig => parseInt(dig)).filter(dig => dig).length;
