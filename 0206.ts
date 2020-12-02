export {};

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const reverseList = (head: ListNode | null): ListNode | null => {
	let prev = null;
	let cur = head;
	while (cur) {
		[cur.next, prev, cur] = [prev, cur, cur.next];
	}
	return prev;
};
