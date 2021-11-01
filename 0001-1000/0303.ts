// class NumArray {
// 	private nums: number[];
// 	constructor(nums: number[]) {
// 		this.nums = nums;
// 	}
// 	public sumRange = (i: number, j: number): number =>
// 		this.nums.slice(i, j + 1).reduce((a, c) => a + c, 0);
// }

// class NumArray {
// 	private nums: number[] = [];
// 	constructor(nums: number[]) {
// 		this.nums = nums;
// 		for (let i = 1; i < nums.length; i++) {
// 			this.nums[i] += this.nums[i - 1];
// 		}
// 		this.nums.unshift(0);
// 	}
// 	public sumRange = (i: number, j: number): number =>
// 		this.nums[j + 1] - this.nums[i];
// }

class NumArray {
	private sum: number[];
	constructor(nums: number[]) {
		this.sum = Array(nums.length + 1).fill(0);
		for (let i = 0; i < nums.length; i++) {
			this.sum[i + 1] = this.sum[i] + nums[i];
		}
	}
	public sumRange = (i: number, j: number): number =>
		this.sum[j + 1] - this.sum[i];
}
