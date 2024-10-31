const copyRandomList = require('../../neetcode/linked-list/copy-list-with-random-pointer');

class Node {
    constructor(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

describe('Main', () => {
    test('Case 1', () => {
        const head = new Node(7);
        head.next = new Node(13);
        head.next.next = new Node(11);
        head.next.next.next = new Node(10);
        head.next.next.next.next = new Node(1);
        head.random = null;
        head.next.random = head;
        head.next.next.random = head.next.next.next.next;
        head.next.next.next.random = head.next.next;
        head.next.next.next.next.random = head;
        let results = copyRandomList(head);
        expect(results.val).toStrictEqual(7);
        expect(results.random).toBeNull();
        results = results.next;
        for (const e of [[13, 7], [11, 1], [10, 11], [1, 7]]) {
            expect(results.val).toStrictEqual(e[0]);
            expect(results.random.val).toStrictEqual(e[1]);
            results = results.next;
        }
    });
    test('Case 2', () => {
        const head = new Node(1);
        head.next = new Node(2);
        head.random = head.next;
        head.next.random = head.next;
        let results = copyRandomList(head);
        for (const e of [[1, 2], [2, 2]]) {
            expect(results.val).toStrictEqual(e[0]);
            expect(results.random.val).toStrictEqual(e[1]);
            results = results.next;
        }
    });
    test('Case 3', () => {
        const head = new Node(3);
        head.next = new Node(3);
        head.next.next = new Node(3);
        head.random = null;
        head.next.random = head;
        head.next.next.random = null;
        let results = copyRandomList(head);
        for (const e of [[3, null], [3, 3], [3, null]]) {
            expect(results.val).toStrictEqual(e[0]);
            expect(results.random?.val ?? null).toStrictEqual(e[1]);
            results = results.next;
        }
    });
});
