export {};

const sum = (arr: number[]): number => arr.reduce((a, c) => a + c, 0);

function* iterateOddLengthSubArraySums(arr: number[]): Generator<number> {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j <= arr.length; j++) {
			const subArray = arr.slice(i, j);
			if (subArray.length % 2) {
				yield sum(subArray);
			}
		}
	}
}

const sumOddLengthSubarrays = (arr: number[]): number =>
	sum([...iterateOddLengthSubArraySums(arr)]);
