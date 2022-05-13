const reverseNum = (num: number): number =>
	parseInt([...num.toString()].reverse().join(""), 10);

const isSameAfterReversals = (num: number): boolean =>
	reverseNum(reverseNum(num)) === num;
