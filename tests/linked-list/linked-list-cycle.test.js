const hasCycle = require('../../neetcode/linked-list/linked-list-cycle');

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

describe('Main', () => {
    test('Case 1', () => {
        const head = new ListNode(3);
        head.next = new ListNode(2);
        head.next.next = new ListNode(0);
        head.next.next.next = head.next;
        expect(hasCycle(head)).toBeTruthy();
    });

    test('Case 2', () => {
        const head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = head.next;
        expect(hasCycle(head)).toBeTruthy();
    });

    test('Case 3', () => {
        const head = new ListNode(1);
        expect(hasCycle(head)).toBeFalsy();
    });
});
