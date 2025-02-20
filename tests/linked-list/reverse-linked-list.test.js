const reverseList = require('../../neetcode/linked-list/reverse-linked-list');

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
        let results = reverseList(head);
        for (const e of [5, 4, 3, 2, 1]) {
            expect(results.val).toStrictEqual(e);
            results = results.next;
        }
    });
    test('Case 2', () => {
        let results = reverseList(new ListNode(1, new ListNode(2)));
        for (const e of [2, 1]) {
            expect(results.val).toStrictEqual(e);
            results = results.next;
        }
    });
    test('Case 3', () => {
        expect(reverseList(null)).toBeNull();
    });
});
