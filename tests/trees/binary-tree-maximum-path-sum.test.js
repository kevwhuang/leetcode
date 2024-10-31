const maxPathSum = require('../../neetcode/trees/binary-tree-maximum-path-sum');

class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

describe('Main', () => {
    test('Case 1', () => {
        const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        expect(maxPathSum(root)).toStrictEqual(6);
    });
    test('Case 2', () => {
        const root = new TreeNode(-10, new TreeNode(9));
        root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));
        expect(maxPathSum(root)).toStrictEqual(42);
    });
});
