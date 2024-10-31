const cloneGraph = require('../../neetcode/graphs/clone-graph');

class Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

describe('Main', () => {
    test('Case 1', () => {
        const v1 = new Node(1);
        const v2 = new Node(2);
        const v3 = new Node(3);
        const v4 = new Node(4);
        v1.neighbors = [v2, v4];
        v2.neighbors = [v1, v3];
        v3.neighbors = [v2, v4];
        v4.neighbors = [v1, v3];
        let results = cloneGraph(v1);
        expect(results.val).toStrictEqual(1);
        expect(results.neighbors[0].val).toStrictEqual(2);
        expect(results.neighbors[1].val).toStrictEqual(4);
        results = results.neighbors[0];
        expect(results.val).toStrictEqual(2);
        expect(results.neighbors[0].val).toStrictEqual(1);
        expect(results.neighbors[1].val).toStrictEqual(3);
        results = results.neighbors[1];
        expect(results.val).toStrictEqual(3);
        expect(results.neighbors[0].val).toStrictEqual(2);
        expect(results.neighbors[1].val).toStrictEqual(4);
        results = results.neighbors[1];
        expect(results.val).toStrictEqual(4);
        expect(results.neighbors[0].val).toStrictEqual(1);
        expect(results.neighbors[1].val).toStrictEqual(3);
    });
    test('Case 2', () => {
        expect(cloneGraph(new Node(1)).val).toStrictEqual(1);
        expect(cloneGraph(new Node(1)).neighbors).toStrictEqual([]);
    });
    test('Case 3', () => {
        expect(cloneGraph(null)).toBeNull();
    });
});
