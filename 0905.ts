const sortArrayByParity = (nums: number[]) =>
	nums.reduce<number[]>((a, c) => {
		if (c % 2) {
			a.push(c);
		} else {
			a.unshift(c);
		}
		return a;
	}, []);
