const isOneBitCharacter = (bits: number[]): boolean => {
	let valid: boolean = !bits.pop() || true;
	while (bits.length && bits.pop()) {
		valid = !valid;
	}
	return valid;
};
