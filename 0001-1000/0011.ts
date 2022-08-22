const maxArea = (height: number[]): number => {
	let max = 0;
	for (
		let start = 0, end = height.length - 1;
		start < end;
		height[start] < height[end] ? start++ : end--
	) {
		max = Math.max(max, Math.min(height[start], height[end]) * (end - start));
	}
	return max;
};
