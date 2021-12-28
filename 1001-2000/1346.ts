const checkIfExist = (arr: number[]): boolean => {
	for (const [i, n] of arr.entries()) {
		if (
			arr.find((findN, findI) => findN === n * 2 && findI !== i) !== undefined
		) {
			return true;
		}
	}
	return false;
};
