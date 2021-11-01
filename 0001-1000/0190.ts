const reverseBits = (n: number): number =>
	parseInt([...n.toString(2)].reverse().join("").padEnd(32, "0"), 2);
