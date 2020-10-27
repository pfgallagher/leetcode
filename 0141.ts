export {};

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const hasCycle = (head: ListNode | null): boolean => {
	const visited: ListNode[] = [];
	while (head) {
		if (visited.includes(head)) {
			return true;
		}
		visited.push(head);
		head = head.next;
	}
	return false;
};
