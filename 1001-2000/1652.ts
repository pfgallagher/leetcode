class KInfo {
	public isNegative: boolean;
	public abs: number;
	constructor(k: number) {
		this.isNegative = k < 0;
		this.abs = Math.abs(k);
	}
}

const decrypt = (code: number[], k: number): number[] => {
	const K = new KInfo(k);
	const decrypted: number[] = [];
	if (K.isNegative) {
		code.reverse();
	}
	for (const [startI] of code.entries()) {
		let sum = 0;
		for (let i = 1; i <= K.abs; i++) {
			sum += code[(startI + i) % code.length];
		}
		decrypted.push(sum);
	}
	return K.isNegative ? decrypted.reverse() : decrypted;
};
