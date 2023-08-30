const reverseList = require('../../neetcode/linked-list/reverse-linked-list');

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

describe('Main', () => {
    test('Case 1', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        let results = reverseList(head);
        for (const e of [5, 4, 3, 2, 1]) {
            expect(results.val).toStrictEqual(e);
            results = results.next;
        }
    });

    test('Case 2', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        let results = reverseList(head);
        for (const e of [2, 1]) {
            expect(results.val).toStrictEqual(e);
            results = results.next;
        }
    });

    test('Case 3', () => {
        const head = new ListNode();
        expect(reverseList(head)).toStrictEqual(head);
    });
});
