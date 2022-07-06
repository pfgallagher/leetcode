const divisorSubstrings = (num: number, k: number): number => {
	let count = 0;
	const numStr = num.toString();
	for (let i = 0; i < numStr.length; i++) {
		const subStr = numStr.slice(i, i + k);
		if (subStr.length === k) {
			const subNum = Number.parseInt(subStr, 10);
			if (subNum && !(num % subNum)) {
				count++;
			}
		}
	}
	return count;
};
