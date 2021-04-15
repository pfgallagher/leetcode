enum OperationTypes {
	N = "N",
	plus = "plus",
	D = "D",
	C = "C",
}

interface Operation {
	type: OperationTypes;
	value?: number;
}

const sum = (arr: number[]): number => arr.reduce((a, c) => a + c, 0);

const parseOps = (ops: string[]): Operation[] =>
	ops.map(op => {
		switch (op) {
			case "+": {
				return { type: OperationTypes.plus };
			}
			case "D": {
				return { type: OperationTypes.D };
			}
			case "C": {
				return { type: OperationTypes.C };
			}
			default: {
				return { type: OperationTypes.N, value: parseInt(op) };
			}
		}
	});

const processOps = (record: number[], ops: Operation[]): void => {
	ops.forEach(({ type, value }) => {
		switch (type) {
			case OperationTypes.N: {
				if (typeof value === "number") {
					record.push(value);
				}
				break;
			}
			case OperationTypes.plus: {
				record.push(sum(record.slice(-2)));
				break;
			}
			case OperationTypes.D: {
				record.push(record.slice(-1)[0] * 2);
				break;
			}
			case OperationTypes.C: {
				record.pop();
				break;
			}
			default: {
				break;
			}
		}
	});
};

const calPoints = (ops: string[]): number => {
	const record: number[] = [];
	processOps(record, parseOps(ops));
	return sum(record);
};
