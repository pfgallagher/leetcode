type Items = [number, number][];

const mergeSimilarItems = (items1: Items, items2: Items): Items => {
	const merged = new Map<number, number>();
	for (const [v, w] of [...items1, ...items2]) {
		merged.set(v, (merged.get(v) ?? 0) + w);
	}
	return [...merged.entries()].sort(([vA], [vB]) => vA - vB);
};
