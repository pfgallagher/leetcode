export {};

const shiftNTimes = (arr: number[], n: number): number[] => {
	while (n--) {
		if (arr.length) {
			arr.unshift(arr.pop()!);
		} else {
			break;
		}
	}
	return arr;
};

const chunkArr = (arr: number[], size: number): number[][] => {
	const res: number[][] = [];
	for (let i = 0; i < arr.length; i += size) {
		res.push(arr.slice(i, i + size));
	}
	return res;
};

const shiftGrid = (grid: number[][], k: number): number[][] =>
	chunkArr(shiftNTimes(grid.flat(), k), grid[0].length);
