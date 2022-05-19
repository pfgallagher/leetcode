const divideString = (s: string, k: number, fill: string): string[] => {
	const divided: string[] = [];
	for (let i = 0; i < s.length; i += k) {
		divided.push(s.slice(i, i + k).padEnd(k, fill));
	}
	return divided;
};
