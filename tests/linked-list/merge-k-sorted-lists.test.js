const mergeKLists = require('../../neetcode/linked-list/merge-k-sorted-lists');

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

describe('Main', () => {
    test('Case 1', () => {
        const lists = [new ListNode(1), new ListNode(1), new ListNode(2)];
        lists[0].next = new ListNode(4);
        lists[0].next.next = new ListNode(5);
        lists[1].next = new ListNode(3);
        lists[1].next.next = new ListNode(4);
        lists[2].next = new ListNode(6);
        let results = mergeKLists(lists);
        for (const e of [1, 1, 2, 3, 4, 4, 5, 6]) {
            expect(results.val).toStrictEqual(e);
            results = results.next;
        }
    });
    test('Case 2', () => {
        expect(mergeKLists([])).toStrictEqual(null);
    });
    test('Case 3', () => {
        expect(mergeKLists([null])).toStrictEqual(null);
    });
});
