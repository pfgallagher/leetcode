class ParkingSystem {
	private spots = {
		big: {
			cur: 0,
			max: 0,
		},
		medium: {
			cur: 0,
			max: 0,
		},
		small: {
			cur: 0,
			max: 0,
		},
	};
	constructor(big: number, medium: number, small: number) {
		this.spots.big.max = big;
		this.spots.medium.max = medium;
		this.spots.small.max = small;
	}
	public addCar = (carType: number): boolean => {
		const type = carType === 1 ? "big" : carType === 2 ? "medium" : "small";
		if (this.spots[type].cur < this.spots[type].max) {
			this.spots[type].cur++;
			return true;
		}
		return false;
	};
}
