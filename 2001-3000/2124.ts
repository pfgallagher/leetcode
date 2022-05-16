const checkString = (s: string): boolean => {
	let hasB = false;
	for (const char of s) {
		if (char === "b") {
			hasB = true;
			continue;
		}
		if (hasB && char === "a") {
			return false;
		}
	}
	return true;
};
