const countAndSay = (n: number): string =>
	n === 1
		? "1"
		: (countAndSay(n - 1).match(/(\d)\1*/g) || [])
				.map(group => `${group.length}${group[0]}`)
				.join("");
