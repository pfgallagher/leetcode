export {};

const sum = (nums: number[]): number => nums.reduce((a, c) => a + c, 0);

const distanceBetweenBusStops = (
	distance: number[],
	start: number,
	destination: number,
): number => {
	if (destination < start) {
		[start, destination] = [destination, start];
	}
	const slicedDistance = sum(distance.slice(start, destination));
	return Math.min(slicedDistance, sum(distance) - slicedDistance);
};
