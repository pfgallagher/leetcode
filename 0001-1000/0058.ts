const lengthOfLastWord = (s: string): number => {
	const arr = s.split(" ").filter(el => el);
	return arr.length ? arr[arr.length - 1].length : 0;
};
