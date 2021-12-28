export {};

function* zip(arr1: number[], arr2: number[]): Generator<[number, number]> {
	while (arr1.length || arr2.length) {
		yield [arr1.shift()!, arr2.shift()!];
	}
}

const busyStudent = (
	startTime: number[],
	endTime: number[],
	queryTime: number,
): number => {
	let count = 0;
	for (const [start, end] of zip(startTime, endTime)) {
		if (start <= queryTime && queryTime <= end) {
			count++;
		}
	}
	return count;
};
