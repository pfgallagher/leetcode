const diStringMatch = (s: string): number[] => {
	let low = 0;
	let high = s.length;
	const match = [...s].reduce<number[]>((a, c) => {
		if (c === "I") {
			a.push(low++);
		} else {
			a.push(high--);
		}
		return a;
	}, []);
	match.push(low);
	return match;
};
