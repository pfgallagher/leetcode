const addDigits = (num: number): number =>
	num.toString().length === 1
		? num
		: addDigits(
				[...num.toString()]
					.map(n => parseInt(n, 10))
					.reduce((a, c) => a + c, 0),
		  );
