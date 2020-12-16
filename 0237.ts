export {};

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const deleteNode = (root: ListNode | null): void => {
	if (root?.next) {
		root.val = root.next.val;
		root.next = root.next.next;
	}
};
