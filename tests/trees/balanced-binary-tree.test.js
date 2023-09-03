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
        const root = new TreeNode(3, 9, new TreeNode(20, 15, 7));
        expect(isBalanced(root)).toBeTruthy();
    });

    test('Case 2', () => {
        const root = new TreeNode(1, null, 2);
        root.left = new TreeNode(2, null, 3);
        root.left.left = new TreeNode(3, 4, 4);
        expect(isBalanced(root)).toBeFalsy();
    });

    test('Case 3', () => {
        expect(isBalanced(new TreeNode())).toBeTruthy();
    });
});
