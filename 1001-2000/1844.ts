const replaceDigits = (s: string): string => {
	let replaced = "";
	for (let i = 0, idxIsEven = true; i < s.length; i++, idxIsEven = !idxIsEven) {
		replaced += idxIsEven
			? s[i]
			: String.fromCharCode(s[i - 1].charCodeAt(0) + parseInt(s[i], 10));
	}
	return replaced;
};
