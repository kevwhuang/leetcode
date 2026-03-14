const maxDepth = require('../../neetcode/trees/maximum-depth-of-binary-tree');

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
        root.right = new TreeNode(20, new TreeNode(15), new TreeNode(17));
        expect(maxDepth(root)).toStrictEqual(3);
    });
    test('Case 2', () => {
        expect(maxDepth(new TreeNode(1, null, new TreeNode(2)))).toStrictEqual(2);
    });
});
