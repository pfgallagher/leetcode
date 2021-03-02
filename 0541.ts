const chunkArr = (arr: string[], size: number): string[] | string[][] => {
	const newArr = arr.slice();
	const chunk = newArr.splice(0, size);
	return chunk.length ? [chunk].concat(chunkArr(newArr, size)) : newArr;
};

const reverseStr = (s: string, k: number): string =>
	(chunkArr([...s], k) as string[][])
		.flatMap((chunk, i) => (!(i % 2) ? chunk.reverse() : chunk))
		.join("");
