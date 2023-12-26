const removeNthFromEnd = require('../../neetcode/linked-list/remove-nth-node-from-end-of-list');

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
        let results = removeNthFromEnd(head, 2);
        for (const e of [1, 2, 3, 5]) {
            expect(results.val).toStrictEqual(e);
            results = results.next;
        }
    });
    test('Case 2', () => {
        expect(removeNthFromEnd(new ListNode(1), 1)).toBeNull();
    });
    test('Case 3', () => {
        expect(removeNthFromEnd(new ListNode(1, new ListNode(2)), 1).val).toStrictEqual(1);
    });
});
