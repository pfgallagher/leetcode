const inRange = (x: number): boolean => (-2) ** 31 <= x && x <= 2 ** 31 - 1;

const reverse = (x: number): number => {
	const numArr = [...x.toString()];
	let left = numArr[0] === "-" ? 1 : 0;
	let right = numArr.length - 1;
	while (left <= right) {
		[numArr[left], numArr[right]] = [numArr[right], numArr[left]];
		left++;
		right--;
	}
	const reversed = parseInt(numArr.join(""), 10);
	return inRange(reversed) ? reversed : 0;
};
