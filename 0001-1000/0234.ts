export {};

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const checkPalindrome = (vals: number[]): boolean => {
	for (let start = 0, end = vals.length - 1; start < end; start++, end--) {
		if (vals[start] !== vals[end]) {
			return false;
		}
	}
	return true;
};

const isPalindrome = (head: ListNode | null): boolean => {
	const vals: number[] = [];
	while (head) {
		vals.push(head.val);
		head = head.next;
	}
	return checkPalindrome(vals);
};
