const getNextDig = (nStr: string): number => parseInt(nStr.slice(-1), 10) || 0;

const addBinary = (a: string, b: string): string => {
	const result = [];
	let carry = 0;
	while (a || b || carry) {
		const sum = getNextDig(a) + getNextDig(b) + carry;
		if (1 < sum) {
			result.unshift(sum % 2);
			carry = 1;
		} else {
			result.unshift(sum);
			carry = 0;
		}
		a = a.slice(0, -1);
		b = b.slice(0, -1);
	}
	return result.join("");
};
