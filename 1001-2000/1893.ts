export {};

type Range = [number, number];

const nIsInRange = (n: number, [rangeStart, rangeEnd]: Range): boolean =>
	rangeStart <= n && n <= rangeEnd;

const isCovered = (ranges: Range[], left: number, right: number): boolean => {
	while (left <= right) {
		if (!ranges.some(range => nIsInRange(left, range))) {
			return false;
		}
		left++;
	}
	return true;
};
