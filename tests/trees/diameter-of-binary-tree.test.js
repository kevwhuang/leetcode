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
        const root = new TreeNode(3, new TreeNode(2, 4, 5), 3);
        expect(diameterOfBinaryTree(root)).toStrictEqual(3);
    });

    test('Case 2', () => {
        expect(diameterOfBinaryTree(new TreeNode(1, 2))).toStrictEqual(1);
    });
});
