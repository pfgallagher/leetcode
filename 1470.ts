const shuffle = (nums: number[], n: number): number[] => {
	const [firstHalf, secondHalf] = [nums.slice(0, n), nums.slice(n)];
	return firstHalf.reduce<number[]>((a, c, i) => {
		a.push(c, secondHalf[i]);
		return a;
	}, []);
};
