export {};

const twoSum = (numbers: number[], target: number): number[] => {
	let startI = 0;
	let endI = numbers.length - 1;
	const getSum = () => numbers[startI] + numbers[endI];
	while (getSum() !== target) {
		if (getSum() < target) {
			startI++;
		} else {
			endI--;
		}
	}
	return [++startI, ++endI];
};
