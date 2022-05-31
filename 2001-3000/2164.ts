export {};

function* zip(arr1: number[], arr2: number[]) {
	while (arr1.length || arr2.length) {
		const arr1El = arr1.shift();
		if (arr1El !== undefined) {
			yield arr1El;
		}
		const arr2El = arr2.shift();
		if (arr2El !== undefined) {
			yield arr2El;
		}
	}
}

const sortEvenOdd = (nums: number[]): number[] => {
	const evenIndices: number[] = [];
	const oddIndices: number[] = [];
	for (const [i, n] of nums.entries()) {
		const corresponding = !(i % 2) ? evenIndices : oddIndices;
		corresponding.push(n);
	}
	evenIndices.sort((a, b) => a - b);
	oddIndices.sort((a, b) => b - a);
	const res: number[] = [];
	for (const el of zip(evenIndices, oddIndices)) {
		res.push(el);
	}
	return res;
};
