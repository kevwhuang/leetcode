const reorderList = require('../../neetcode/linked-list/reorder-list');

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

describe('Main', () => {
    test('Case 1', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        let results = reorderList(head);
        for (const e of [1, 4, 2, 3]) {
            expect(results.val).toStrictEqual(e);
            results = results.next;
        }
    });

    test('Case 2', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        let results = reorderList(head);
        for (const e of [1, 5, 2, 4, 3]) {
            expect(results.val).toStrictEqual(e);
            results = results.next;
        }
    });
});
