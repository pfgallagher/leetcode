// const relativeSortArray = (arr1: number[], arr2: number[]): number[] =>
// 	arr1.sort((a, b) => {
// 		const hasA = arr2.includes(a);
// 		const hasB = arr2.includes(b);
// 		return hasA && hasB
// 			? arr2.indexOf(a) - arr2.indexOf(b)
// 			: hasB
// 			? 1
// 			: hasA
// 			? -1
// 			: a - b;
// 	});

const relativeSortArray = (arr1: number[], arr2: number[]): number[] => {
	const indexMap: { [n: number]: number } = {};
	for (const el of arr1) {
		if (indexMap[el] === undefined) {
			indexMap[el] = arr2.indexOf(el);
		}
	}
	return arr1.sort((a, b) => {
		const hasA = indexMap[a] !== -1;
		const hasB = indexMap[b] !== -1;
		return hasA && hasB
			? indexMap[a] - indexMap[b]
			: hasB
			? 1
			: hasA
			? -1
			: a - b;
	});
};
