const diameterOfBinaryTree = require('../../neetcode/trees/diameter-of-binary-tree');

class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

describe('Main', () => {
    test('Case 1', () => {
        const root = new TreeNode(3, null, new TreeNode(3));
        root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5));
        expect(diameterOfBinaryTree(root)).toStrictEqual(3);
    });

    test('Case 2', () => {
        expect(diameterOfBinaryTree(new TreeNode(1, new TreeNode(2)))).toStrictEqual(1);
    });
});
