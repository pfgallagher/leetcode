const bitwiseComplement = (n: number): number =>
	parseInt((~n >>> 0).toString(2).slice(-n.toString(2).length), 2);
