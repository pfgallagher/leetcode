export {};

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const swapPairs = (head: ListNode | null): ListNode | null => {
	const dummy = new ListNode(0, head);
	let prev = dummy;
	let cur = head;
	while (cur?.next) {
		prev.next = cur.next;
		cur.next = prev.next.next;
		prev.next.next = cur;
		prev = cur;
		cur = cur.next;
	}
	return dummy.next;
};
