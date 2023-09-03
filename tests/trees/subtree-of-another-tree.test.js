const isSubtree = require('../../neetcode/trees/subtree-of-another-tree');

class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

describe('Main', () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(4);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(2);
    root.right = new TreeNode(5);
    const subRoot = new TreeNode(4);
    subRoot.left = new TreeNode(1);
    subRoot.right = new TreeNode(2);

    test('Case 1', () => {
        expect(isSubtree(root, subRoot)).toBeTruthy();
    });

    test('Case 2', () => {
        root.left.right.left = new TreeNode(0);
        expect(isSubtree(root, subRoot)).toBeFalsy();
    });
});
