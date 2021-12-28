const lastStoneWeight = (stones: number[]): number => {
	const sort = () => {
		stones.sort((a, b) => a - b);
	};
	sort();
	while (1 < stones.length) {
		const [secondHeaviest, heaviest] = stones.splice(-2, 2);
		if (heaviest !== secondHeaviest) {
			stones.push(heaviest - secondHeaviest);
			sort();
		}
	}
	return stones[0] || 0;
};
