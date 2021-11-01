class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// const mergeTwoLists = (
// 	l1: ListNode | null,
// 	l2: ListNode | null,
// ): ListNode | null => {
// 	if (!l2) {
// 		return l1;
// 	}
// 	if (!l1) {
// 		return l2;
// 	}
// 	const list = new ListNode();
// 	if (l1.val < l2.val) {
// 		list.next = l1;
// 		list.next.next = mergeTwoLists(l1.next, l2);
// 	} else {
// 		list.next = l2;
// 		list.next.next = mergeTwoLists(l2.next, l1);
// 	}
// 	return list.next;
// };

const mergeTwoLists = (
	l1: ListNode | null,
	l2: ListNode | null,
): ListNode | null => {
	if (!l2) {
		return l1;
	}
	if (!l1) {
		return l2;
	}
	if (l1.val < l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	} else {
		l2.next = mergeTwoLists(l1, l2.next);
		return l2;
	}
};
