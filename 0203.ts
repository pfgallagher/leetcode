export {};

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const removeElements = (
	head: ListNode | null,
	val: number,
): ListNode | null => {
	if (!head) {
		return null;
	}
	let cur = head;
	while (cur.next) {
		if (cur.next.val === val) {
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
	}
	return head.val === val ? head.next : head;
};
