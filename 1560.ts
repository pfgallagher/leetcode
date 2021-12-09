const mostVisited = (n: number, rounds: number[]): number[] => {
	const last = rounds[rounds.length - 1];
	const visited: number[] = [last];
	let i = rounds[0];
	while (i !== last) {
		visited.push(i);
		i++;
		if (n < i) {
			i = 1;
		}
	}
	return visited.sort((a, b) => a - b);
};
