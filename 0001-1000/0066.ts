const plusOne = (digits: number[]): number[] => {
	for (let i = digits.length - 1; 0 <= i; i--) {
		digits[i]++;
		digits[i] %= 10;
		if (!digits[i] && !i) {
			digits.unshift(1);
		}
		if (digits[i]) {
			break;
		}
	}
	return digits;
};
