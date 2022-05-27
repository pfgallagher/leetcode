const parse = (nStr: string): number => parseInt(nStr, 10);

const minimumSum = (num: number): number => {
	const digs = [...num.toString()].map(n => parse(n)).sort((a, b) => a - b);
	return parse(`${digs[0]}${digs[3]}`) + parse(`${digs[1]}${digs[2]}`);
};
