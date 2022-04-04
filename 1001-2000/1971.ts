type Edges = [number, number][];
type AggregatedPaths = { [n: number]: number[] };

const aggregatePaths = (n: number, edges: Edges): AggregatedPaths => {
	const aggregatedPaths: AggregatedPaths = Object.fromEntries(
		[...Array(n).keys()].map(n => [n, []]),
	);
	for (const [u, v] of edges) {
		aggregatedPaths[u].push(v);
		aggregatedPaths[v].push(u);
	}
	return aggregatedPaths;
};

const dfs = (
	aggregated: AggregatedPaths,
	x: number,
	target: number,
	visited = new Set<number>(),
): boolean => {
	if (!aggregated.hasOwnProperty(x) || visited.has(x)) {
		return false;
	}
	const neighbors = aggregated[x];
	if (neighbors.includes(target)) {
		return true;
	}
	visited.add(x);
	return neighbors.some(neighbor => dfs(aggregated, neighbor, target, visited));
};

const validPath = (
	n: number,
	edges: Edges,
	source: number,
	destination: number,
): boolean =>
	source === destination || dfs(aggregatePaths(n, edges), source, destination);
