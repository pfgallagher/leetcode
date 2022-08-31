export {};

const isNegative = (dividend: number, divisor: number): boolean => {
	const dividendSign = Math.sign(dividend);
	const divisorSign = Math.sign(divisor);
	return (
		(dividendSign === -1 && divisorSign === 1) ||
		(divisorSign === -1 && dividendSign === 1)
	);
};

const clamp = (n: number, min = (-2) ** 31, max = 2 ** 31 - 1): number =>
	max <= n ? max : n <= min ? min : n;

const divide = (dividend: number, divisor: number): number => {
	if (divisor === 1) {
		return dividend;
	}
	const isNeg = isNegative(dividend, divisor);
	dividend = Math.abs(dividend);
	divisor = Math.abs(divisor);
	// I was originally using subtraction, but it was too slow with TS/JS. So, I resorted to using logs intead.
	// Recall log(a/b) = log(a) - log(b). Raise e to the power of log(a/b) and round to get the quotient
	let quotient = Math.floor(Math.exp(Math.log(dividend) - Math.log(divisor)));
	if (isNeg) {
		quotient = -quotient;
	}
	return clamp(quotient);
};
