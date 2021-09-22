export {};

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function* iterateList(head: ListNode | null): Generator<number> {
	while (head) {
		yield head.val;
		head = head.next;
	}
}

const getDecimalValue = (head: ListNode | null): number => {
	let digits = "";
	for (const digit of iterateList(head)) {
		digits += digit;
	}
	return parseInt(digits, 2);
};
