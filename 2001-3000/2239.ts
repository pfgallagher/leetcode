const findClosestNumber = (nums: number[]): number => {
	let distance = Infinity;
	let closest = -Infinity;
	for (const n of nums) {
		const abs = Math.abs(n);
		if (abs < distance) {
			distance = abs;
			closest = n;
		} else if (abs === distance) {
			if (closest < n) {
				closest = n;
			}
		}
	}
	return closest;
};
