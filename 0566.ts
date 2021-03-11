export {};

const chunkArr = (arr: number[], size: number): number[] | number[][] => {
	const newArr = arr.slice();
	const chunk = newArr.splice(0, size);
	return chunk.length ? [chunk].concat(chunkArr(newArr, size)) : newArr;
};

const matrixReshape = (nums: number[][], r: number, c: number): number[][] => {
	const flattened = nums.flat(Infinity) as number[];
	if (flattened.length !== r * c) {
		return nums;
	}
	return chunkArr(flattened, c) as number[][];
};
