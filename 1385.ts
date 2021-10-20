const findTheDistanceValue = (
	arr1: number[],
	arr2: number[],
	d: number,
): number => arr1.filter(n1 => arr2.every(n2 => d < Math.abs(n1 - n2))).length;
