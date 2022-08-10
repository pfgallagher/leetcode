export {};

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const addTwoNumbers = (
	l1: ListNode | null,
	l2: ListNode | null,
): ListNode | null => {
	const sumList = new ListNode();
	let cur = sumList;
	let carry = 0;
	while (l1 || l2 || carry) {
		const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
		carry = Math.floor(sum / 10);
		cur.next = new ListNode(sum % 10);
		cur = cur.next;
		if (l1) {
			l1 = l1.next;
		}
		if (l2) {
			l2 = l2.next;
		}
	}
	return sumList.next;
};
