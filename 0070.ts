const climbStairs = (n: number): number => {
	if (n === 1) {
		return 1;
	}
	let one = 1;
	let two = 2;
	for (let i = 0; i <= n - 3; i++) {
		[one, two] = [two, one + two];
	}
	return two;
};
