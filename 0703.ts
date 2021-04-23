class KthLargest {
	private k: number;
	private nums: number[];

	constructor(k: number, nums: number[]) {
		this.k = k;
		this.nums = nums;
		this.sort();
	}

	public add = (val: number): number => {
		this.nums.push(val);
		this.sort();
		return this.nums[this.nums.length - this.k];
	};

	private sort = () => {
		this.nums.sort((a, b) => a - b);
	};
}
