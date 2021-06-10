const lemonadeChange = (bills: number[]): boolean => {
	let fives = 0;
	let tens = 0;
	for (const bill of bills) {
		if (bill === 5) {
			fives++;
		} else if (bill === 10) {
			if (fives) {
				fives--;
				tens++;
			} else {
				return false;
			}
		} else {
			if (fives && tens) {
				fives--;
				tens--;
			} else if (3 <= fives) {
				fives -= 3;
			} else {
				return false;
			}
		}
	}
	return true;
};
