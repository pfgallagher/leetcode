const containsDuplicate = (nums: number[]): boolean => {
	const visited: number[] = [];
	for (const num of nums) {
		if (visited.includes(num)) {
			return true;
		}
		visited.push(num);
	}
	return false;
};

