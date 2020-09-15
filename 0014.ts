const longestCommonPrefix = (strs: string[]): string => {
	let longestPrefix = "";
	for (let i = 0; i < strs[0]?.length; i++) {
		const curPrefix = strs[0].slice(0, i + 1);
		if (strs.every(str => str.startsWith(curPrefix))) {
			longestPrefix += strs[0][i];
		}
	}
	return longestPrefix;
};
