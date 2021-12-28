class BuiltArray {
	public targetLength: number;
	public arr: string[] = [];
	public actualLength = 0;
	constructor(targetLength: number) {
		this.targetLength = targetLength;
	}
	public push = (): void => {
		this.arr.push("Push");
		this.actualLength++;
	};
	public pop = (): void => {
		this.arr.push("Pop");
		this.actualLength--;
	};
	public isBuilt = (): boolean => this.actualLength === this.targetLength;
}

const buildArray = (target: number[], n: number): string[] => {
	const built = new BuiltArray(target.length);
	let i = 1;
	let targetI = 0;
	while (i <= n) {
		built.push();
		if (i === target[targetI]) {
			targetI++;
		} else {
			built.pop();
		}
		if (built.isBuilt()) {
			return built.arr;
		}
		i++;
	}
	return built.arr;
};
