const isBalanced = require('../../neetcode/trees/balanced-binary-tree');

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
        expect(isBalanced(root)).toBeTruthy();
    });

    test('Case 2', () => {
        const root = new TreeNode(1, null, new TreeNode(2));
        root.left = new TreeNode(2, null, new TreeNode(3));
        root.left.left = new TreeNode(3, new TreeNode(4), new TreeNode(4));
        expect(isBalanced(root)).toBeFalsy();
    });

    test('Case 3', () => {
        expect(isBalanced(new TreeNode())).toBeTruthy();
    });
});
