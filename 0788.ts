export {};

const rotationMap: { [n: string]: string } = {
	"0": "0",
	"1": "1",
	"2": "5",
	"5": "2",
	"6": "9",
	"8": "8",
	"9": "6",
};

const isValidRotation = (n: number): boolean => {
	let rotated = "";
	for (const dig of [...n.toString()]) {
		if (rotationMap.hasOwnProperty(dig)) {
			rotated += rotationMap[dig];
		} else {
			return false;
		}
	}
	return parseInt(rotated, 10) !== n;
};

function* range(start: number, end: number) {
	for (let i = start; i <= end; i++) {
		yield i;
	}
}

const rotatedDigits = (n: number): number => {
	let count = 0;
	for (const i of range(1, n)) {
		if (isValidRotation(i)) {
			count++;
		}
	}
	return count;
};
