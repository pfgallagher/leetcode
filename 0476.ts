const findComplement = (num: number): number =>
	parseInt([...num.toString(2)].map(n => (n === "0" ? "1" : "0")).join(""), 2);
