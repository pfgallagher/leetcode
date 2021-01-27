const thirdMax = (nums: number[]): number => {
	const deDuped = [...new Set(nums)];
	return deDuped.length < 3
		? Math.max(...deDuped)
		: deDuped.sort((a, b) => a - b)[deDuped.length - 3];
};
