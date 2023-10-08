const addTwoNumbers = require('../../neetcode/linked-list/add-two-numbers');

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

describe('Main', () => {
    test('Case 1', () => {
        const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
        const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
        let results = addTwoNumbers(l1, l2);
        for (const e of [7, 0, 8]) {
            expect(results.val).toStrictEqual(e);
            results = results.next;
        }
    });

    test('Case 2', () => {
        const l1 = new ListNode(0);
        const l2 = new ListNode(0);
        expect(addTwoNumbers(l1, l2).val).toStrictEqual(0);
    });

    test('Case 3', () => {
        const l1 = new ListNode(9);
        l1.next = new ListNode(9);
        l1.next.next = new ListNode(9);
        l1.next.next.next = new ListNode(9);
        l1.next.next.next.next = new ListNode(9);
        l1.next.next.next.next.next = new ListNode(9);
        l1.next.next.next.next.next.next = new ListNode(9);
        const l2 = new ListNode(9);
        l2.next = new ListNode(9);
        l2.next.next = new ListNode(9);
        l2.next.next.next = new ListNode(9);
        let results = addTwoNumbers(l1, l2);
        for (const e of [8, 9, 9, 9, 0, 0, 0, 1]) {
            expect(results.val).toStrictEqual(e);
            results = results.next;
        }
    });
});
