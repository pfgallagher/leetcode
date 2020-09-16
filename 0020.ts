const pairs: { [key: string]: string } = {
	"(": ")",
	"{": "}",
	"[": "]",
};

const isValid = (s: string): boolean => {
	const arr = [];
	for (const char of [...s]) {
		if (Object.keys(pairs).includes(char)) {
			arr.push(char);
		} else {
			const last = arr[arr.length - 1];
			if (last && pairs[last] === char) {
				arr.pop();
			} else {
				return false;
			}
		}
	}
	return !arr.length;
};
