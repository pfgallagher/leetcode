const finalValueAfterOperations = (
	operations: ("--X" | "X--" | "++X" | "X++")[],
): number => {
	let X = 0;
	for (const operation of operations) {
		switch (operation) {
			case "++X":
			case "X++": {
				X++;
				break;
			}
			case "--X":
			case "X--": {
				X--;
				break;
			}
		}
	}
	return X;
};
