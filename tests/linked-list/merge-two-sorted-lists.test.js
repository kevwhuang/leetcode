const mergeTwoLists = require('../../neetcode/linked-list/merge-two-sorted-lists');

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

describe('Main', () => {
    test('Case 1', () => {
        const list1 = new ListNode(1);
        list1.next = new ListNode(2);
        list1.next.next = new ListNode(4);
        const list2 = new ListNode(1);
        list2.next = new ListNode(3);
        list2.next.next = new ListNode(4);
        let results = mergeTwoLists(list1, list2);
        for (const e of [1, 1, 2, 3, 4, 4]) {
            expect(results.val).toStrictEqual(e);
            results = results.next;
        }
    });

    test('Case 2', () => {
        expect(mergeTwoLists(null, null)).toStrictEqual(null);
    });

    test('Case 3', () => {
        expect(mergeTwoLists(null, new ListNode(0)).val).toStrictEqual(0);
    });
});
