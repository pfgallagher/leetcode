const minimumOperations = (nums: number[]): number => {
	const set = new Set<number>(nums);
	set.delete(0);
	return set.size;
};
