export {};

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const deleteDuplicates = (head: ListNode | null): ListNode | null => {
	let curNode = head;
	while (curNode?.next) {
		if (curNode.val === curNode.next.val) {
			curNode.next = curNode.next.next;
		} else {
			curNode = curNode.next;
		}
	}
	return head;
};
