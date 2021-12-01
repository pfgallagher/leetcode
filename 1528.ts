const restoreString = (s: string, indices: number[]): string => {
	const strArr = Array(indices.length);
	indices.forEach((shuffleI, i) => (strArr[shuffleI] = s[i]));
	return strArr.join("");
};
