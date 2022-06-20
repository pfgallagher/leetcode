const groupAndSort = (num: number): [number[], number[]] => {
	const even: number[] = [];
	const odd: number[] = [];
	for (const dig of num.toString()) {
		const n = Number.parseInt(dig, 10);
		(!(n % 2) ? even : odd).push(n);
	}
	even.sort((a, b) => b - a);
	odd.sort((a, b) => b - a);
	return [even, odd];
};

const largestInteger = (num: number): number => {
	const res: number[] = [];
	const [even, odd] = groupAndSort(num);
	for (const dig of num.toString()) {
		const n = Number.parseInt(dig, 10);
		res.push(!(n % 2) ? even.shift()! : odd.shift()!);
	}
	return Number.parseInt(res.join(""));
};
