const addStrings = (num1: string, num2: string): string => {
	const sum: number[] = [];
	let carry = 0;
	for (
		let c1 = num1.length - 1, c2 = num2.length - 1;
		0 <= c1 || 0 <= c2;
		c1--, c2--
	) {
		const subSum = (+num1[c1] || 0) + (+num2[c2] || 0) + carry;
		carry = Math.floor(subSum / 10);
		sum.unshift(subSum % 10);
	}
	if (carry) {
		sum.unshift(carry);
	}
	return sum.join("");
};
