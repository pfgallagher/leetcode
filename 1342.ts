const numberOfSteps = (n: number): number =>
	n
		? (n.toString(2).padStart(32, "0").match(/1/g) || []).length +
		  Math.floor(Math.log2(n))
		: 0;
