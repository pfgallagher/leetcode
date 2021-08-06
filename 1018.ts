const prefixesDivBy5 = (nums: number[]): boolean[] => {
	const answer: boolean[] = [];
	let last = 0;
	for (const cur of nums) {
		last = (last * 2 + cur) % 5;
		answer.push(!last);
	}
	return answer;
};
