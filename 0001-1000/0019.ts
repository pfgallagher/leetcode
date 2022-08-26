export {};

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const removeNthFromEnd = (
	head: ListNode | null,
	n: number,
): ListNode | null => {
	const dummy = new ListNode(0, head);
	let slow: ListNode | null = dummy;
	let fast: ListNode | null = dummy;
	for (let i = 0; i < n; i++) {
		fast = fast?.next ?? null;
	}
	while (fast?.next) {
		fast = fast.next;
		slow = slow?.next ?? null;
	}
	if (slow) {
		slow.next = slow?.next?.next ?? null;
	}
	return dummy.next;
};
