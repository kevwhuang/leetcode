const levelOrder = require('../../neetcode/trees/binary-tree-level-order-traversal');

class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

describe('Main', () => {
    test('Case 1', () => {
        const root = new TreeNode(3, new TreeNode(9));
        root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));
        expect(levelOrder(root)).toStrictEqual([[3], [9, 20], [15, 7]]);
    });
    test('Case 2', () => {
        expect(levelOrder(new TreeNode(1))).toStrictEqual([[1]]);
    });
    test('Case 3', () => {
        expect(levelOrder(null)).toStrictEqual([]);
    });
});
