const reverseKGroup = require('../../neetcode/linked-list/reverse-nodes-in-k-group');

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
        head.next.next.next.next = new ListNode(5);
        let results = reverseKGroup(head, 2);
        for (const e of [2, 1, 4, 3, 5]) {
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
        let results = reverseKGroup(head, 3);
        for (const e of [3, 2, 1, 4, 5]) {
            expect(results.val).toStrictEqual(e);
            results = results.next;
        }
    });
});
