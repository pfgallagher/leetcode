const isSubsequence = (s: string, t: string): boolean => {
	const sArr = [...s];
	let tArr = [...t];
	while (sArr.length) {
		const shifted = sArr.shift();
		if (shifted && tArr.includes(shifted)) {
			tArr = tArr.slice(tArr.indexOf(shifted) + 1);
		} else {
			return false;
		}
	}
	return true;
};
